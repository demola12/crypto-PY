import { NewwalletddressService } from './../../_services/newwalletddress.service';
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import jwt_decode from "jwt-decode"
import { Utility } from 'src/app/_services/utility';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  item = false;
  viewMode = "map";
  private token;
  public decoded_token;
  public addresses:any[] = [];
  public AddNewAddressStatus:boolean = false;
  // @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();
  public blockchain: FormControl = new FormControl("", [Validators.required])
  public name: FormControl = new FormControl("", [Validators.required])
  public contract_address: FormControl = new FormControl("") || null
  constructor(private _snackbar: MatSnackBar, private newwalletaddressservice: NewwalletddressService) { }

  ngOnInit(): void {
    this.loadAddresses().then(()=>{

    })
  }

  private getDecodedJwt(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  ngAfterViewInit(){
    
  }

  private async loadAddresses(){

      this.token = window.localStorage.getItem('token')
      this.decoded_token = this.getDecodedJwt(this.token)
      console.log(this.decoded_token)
      for(let address in this.decoded_token.addresses.eth){
        this.addresses.push(this.decoded_token.addresses.eth[address])
        
      }

      for(let address in this.decoded_token.addresses.ethtokens){
        this.addresses.push(Object.values(this.decoded_token.addresses.ethtokens[address])[0])
      }
      
      console.log(this.addresses)
  }

  public CopyToClipboard(containerid) {
    var content = document.getElementById(containerid).textContent
    navigator.clipboard.writeText(content).then().catch(e => console.error(e));
    this._snackbar.open("Address copied to clipboard", "Dismiss")

  }

  addNewAddress(){
    this.AddNewAddressStatus = true;
  }

  cancelNewAddressAction(){
    this.AddNewAddressStatus = false;
  }

  submit(action:string){
    if (action=='newtoken'){
      this.validateAddress().then((data:any)=>{
          this.newwalletaddressservice.importNewToken({
            "blockchain":Utility.prototype.getSymbol(this.blockchain.value),
            "name":this.name.value,
            "contract_address":this.contract_address.value,
            "mode":`${this.getSymbol(this.blockchain.value,'token')}`
            }).pipe(take(1)).subscribe((response: any) => {
              console.log(response)
              this.AddNewAddressStatus = false;
            })
      })
    }
    else{
      this.newwalletaddressservice.addNewBlockchainAddress({
                                                  "blockchain":Utility.prototype.getSymbol(this.blockchain.value),
                                                  "name":this.name.value,
                                                  "mode":`${this.getSymbol(this.blockchain.value,'std')}`
                                                  }).pipe(take(1)).subscribe((response: any) => {
                                                    console.log(response)
                                                    this.AddNewAddressStatus = false;
                                                  })
    }
    
  }

  getSymbol(blockchain_:string,append:string){
    
    return Utility.prototype.getSymbol(blockchain_)+`-${append}`
  }

  async validateAddress(){} 
  // toggle(){
  //   this.item =! this.item;
  //   this.toggleDisplay.emit({item: this.item});
  // }

}
