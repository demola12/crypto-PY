import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  item = false;
  // @Output() toggleDisplay: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // toggle(){
  //   this.item =! this.item;
  //   this.toggleDisplay.emit({item: this.item});
  // }

}
