import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceberApi {
  constructor(private srv: HttpClient){
  }

  getItau(): Observable<any>{
    return this.srv.get('https://brapi.dev/api/quote/ITUB4?fundamental=true&dividends=true')
  }
  getPetrobras(): Observable<any>{
    return this.srv.get('https://brapi.dev/api/quote/PETR4,MGLU3?range=1mo&interval=1d')
  }
  getVale(): Observable<any>{
    return this.srv.get('https://brapi.dev/api/quote/VALE3?range=1mo&interval=1d')
  }

}
