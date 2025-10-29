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

  
}
