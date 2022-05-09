import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
interface NewBlockchainAddressInterface{
  blockchain: string;
  name: string;
  mode:string;
}

interface NewTokenInterface{
  blockchain: string;
  name: string;
  contract_address:string;
  mode:string;
}

@Injectable({
  providedIn: 'root'
})
export class NewwalletddressService {

  constructor(private httpclient: HttpClient) { }

  public addNewBlockchainAddress(data:NewBlockchainAddressInterface){
    console.log(data)
    return this.httpclient.post(`http://77.68.92.98:8000/api/v1/setup/create/new_address`,data)
  }

  public importNewToken(data:NewTokenInterface){
    console.log(data)
    return this.httpclient.post(`http://77.68.92.98:8000/api/v1/setup/create/new_address`,data)
  }
}
