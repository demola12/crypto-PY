import { Component, Input, OnInit } from '@angular/core';

interface Coin {
  value: string;
  viewValue: string;
  img: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  foods: Coin[] = [
    {value: 'BTC', viewValue: 'Bitcoin BTC', img:'https://www.akberiqbal.com/favicon-16x16.png'},
    {value: 'BNB', viewValue: 'Binance BNB', img:'https://www.akberiqbal.com/favicon-16x16.png'},
    {value: 'ETH', viewValue: 'Etherum ETH', img:'https://www.akberiqbal.com/favicon-16x16.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
