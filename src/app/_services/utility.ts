import { EventEmitter } from "@angular/core";

export class Utility{
    addressesEmitter = new EventEmitter<boolean>();

    constructor() {}

    getaddressesEmitter() {
        return this.addressesEmitter
      }

    public getSymbol(blockchain_:string){
        var symbol:any = blockchain_.split("_")[1]
        symbol = symbol.split("(")[1]
        symbol = symbol.split(")")[0]
        console.log("new symbol ",symbol)
        return symbol.toLowerCase()
      }
}