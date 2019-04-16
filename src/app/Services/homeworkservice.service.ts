import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeworkserviceService {
  hwurl:string='http://localhost:3000/homework/';
  addhwurl:string='http://localhost:3000/addhw/';
  constructor(public _http:HttpClient) { }

  onhomework(h_class:number,h_div:string)
  {
    return this._http.get(this.hwurl+h_class+'/'+h_div);
  }
  addhw(item)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.addhwurl,body,{headers:h});
  
  }

}