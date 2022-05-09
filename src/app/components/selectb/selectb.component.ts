import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
interface Blockchains{
  blockchain: string;
  symbol: string;
}
@Component({
  selector: 'app-selectb',
  templateUrl: './selectb.component.html',
  styleUrls: ['./selectb.component.scss']
})
export class SelectbComponent implements OnInit {
  selected_blockchain:string;
  Values: Blockchains[] = [{"blockchain":"Bitcoin","symbol":"(BTC)"},
                           {"blockchain":"Ethereum","symbol":"(ETH)"}
                          ];
  @Input() control: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  // onOptionsSelected(event:any){
  //   // alert(`You chose ${blockchainValue}`)
  //   var blockchainValue = event.target.value
  //   this.selected_blockchain = blockchainValue.split("_")[1]
  //   console.log(this.selected_blockchain)
  // }

}
