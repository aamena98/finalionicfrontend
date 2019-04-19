import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RemarkService {

  addremark:string="http://localhost:3000/remark/";
  addremark1:string="http://localhost:3000/viewremark/";

  constructor(private _http:HttpClient) { }

  AddRemark(item)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.addremark,body,{headers:h});
  }
  viewRemarkByid(user_id:number)
  {
    return this._http.get(this.addremark+user_id);
  }
  viewedRemarks(user_id:number)
  {
    return this._http.get(this.addremark1+user_id);
  }
  updateRemarkStatus(item)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    //let ldate=moment(item.l_date).format("YYYY-MM-DD");
    return this._http.put(this.addremark+item.r_id,body,{headers:h});
  }
}
