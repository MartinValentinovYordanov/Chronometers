import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChronometerProvider } from '../chronometer.provider';
import { Chronometer } from '../model/chronometer';

@Injectable({
  providedIn: 'root'
})
export class WebRequests {
  private headers: HttpHeaders;
  private url = 'https://localhost:5001/chronometer';
   
  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  
  public Get(){
    return this.httpClient.get<Chronometer[]>(this.url,{headers: this.headers});
  }
  public Post() {
    return this.httpClient.post(this.url ,{},{headers: this.headers});
  }
  public Put(chronometerModel : Chronometer) {
    return this.httpClient.put(this.url,chronometerModel);
  }
  public Delete(chronometerId:number){
    return this.httpClient.delete(this.url,{body:chronometerId});
  }
}
