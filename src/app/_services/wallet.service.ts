import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SendTokenInterface{
   sender:string;
   recipient: string;
   blockchain: string; 
   amount: number;
   token: string;
   
 }

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  

  constructor(private httpclient: HttpClient) { }

  public getWallets(){
    return this.httpclient.get(`http://77.68.92.98:8000/api/v1/wallets/addresses`)
  }

  public getBlockchainWallet(blockchain_id){
    return this.httpclient.get(`http://77.68.92.98:8000/api/v1/blockchain/addresses/${blockchain_id}`)
  }

  public getBalance(blockchain,address,token){
    return this.httpclient.get(`http://77.68.92.98:8000/api/v1/wallet/balance/${blockchain}/${address}/${token}`)
  }

  public sendToken(payload: SendTokenInterface) {
    console.log(payload)
    return this.httpclient.post(`http://77.68.92.98:8000/api/v1/transactions/send/ethereum/tokens`,payload)
  }

  public sendLegacy(payload: SendTokenInterface) {
    console.log(payload)
    return this.httpclient.post(`http://77.68.92.98:8000/api/v1/transactions/send/ethereum/native`,payload)
  }

  
}
