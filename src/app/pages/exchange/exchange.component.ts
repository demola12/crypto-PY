
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Utility } from 'src/app/_services/utility';
import { WalletService } from '../../_services/wallet.service';
var walletservice;
var selected_blockchain_addresses;

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  viewMode = "map";
  private symbol:string;
  private token:any;
  private sender_address:string;
  public selectedaddress_balance:number;
  public selectedaddress_symbol:string;
  public supported_blockchains:any;
  public selected_blockchain:string;
  public selected_blockchain_addresses:any[] = [];
  private parsed_blockchain:string;
  public blockchain: FormControl = new FormControl("", [Validators.required])
  public amount: FormControl = new FormControl("", [Validators.required])
  public recipient: FormControl = new FormControl("", [Validators.required])
  constructor(private walletservice: WalletService) { }

  ngOnInit(): void {
  }

  addressSelectionChanged(event:any){
    console.log("Wallet ",event.target.value)
    
    this.token = event.target.value.split(",")[2]
    if (this.token=="") this.token = "None"
    this.sender_address = event.target.value.split(",")[1]
    this.parsed_blockchain = event.target.value.split(",")[0].toLowerCase()
    
    this.walletservice.getBalance(this.parsed_blockchain,this.sender_address,this.token)
    .pipe(
          map((res:any) =>{
            if (res.status == true){
              console.log(res)
              return [res.token,res.balance]
            }
            else
            return false
          })
        )
    .subscribe((response: any) => {
      console.log(response)
      this.selectedaddress_symbol = response[0]
      if (response[0] == "None") this.selectedaddress_symbol = this.symbol;
      this.selectedaddress_balance = response[1]
    })
  }

  onOptionsSelected(event:any){
    console.log("Blockchain ",event.target.value)
    var sel:string = Utility.prototype.getSymbol(event.target.value).toUpperCase();
    this.symbol = sel
    console.log(sel)
    walletservice = this.walletservice
    selected_blockchain_addresses = this.selected_blockchain_addresses
    this.supported_blockchains = JSON.parse(window.localStorage.getItem("supported_blockchains"));
    console.log(typeof this.supported_blockchains)
    var self = this;
    this.link(self,sel).then((val)=>{
      console.log(this.selected_blockchain_addresses)
    })

  }
  link(self,sel){
    return new Promise((resolve,reject) => {
      this.supported_blockchains.filter(async function(e) {
        if (e.blockchain_symbol === sel){
           walletservice.getBlockchainWallet(e.id).pipe(
             map((res:any) =>{
               if (res.status == true){
                 return res.addresses
               }
               else
               return false
             })
           )
           .subscribe({
             next:(response:any) => {
               self.selected_blockchain_addresses = response
               selected_blockchain_addresses
               resolve(1)
             }
           })
        }
        return e.blockchain_symbol === sel; 
       }) 
    })
  
  }

  submit(action:string){
    console.log("Token ",this.token)
    if (!this.token== undefined ||'None'){
      this.validateAddress().then((data:any)=>{
          this.walletservice.sendToken({
                                        sender:this.sender_address,
                                        recipient:this.recipient.value,
                                        blockchain:this.parsed_blockchain,
                                        amount:this.amount.value,
                                        token: this.token
                                        
                                        }).subscribe((response: any) => {
                                          console.log(response)
                                        })
      })
    }
    if (this.token== undefined || this.token== 'None'){
      this.token = "None"
      this.walletservice.sendLegacy({
                                      sender:this.sender_address,
                                      recipient:this.recipient.value,
                                      blockchain:this.parsed_blockchain,
                                      amount:this.amount.value,
                                      token:this.token
                                      }).subscribe((response: any) => {
                                        console.log(response)
                                      })
    }
    
  }

  async validateAddress(){}

}
