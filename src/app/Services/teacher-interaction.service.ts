import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherInteractionService {
  
  sendmsgurl1:string='http://localhost:3000/t_interact1/';
  sendmsgurl:string='http://localhost:3000/t_interact/';
  getstudentinfo:string='http://localhost:3000/students/';
  replyurl:string='http://localhost:3000/reply/';
  msgurl:string='http://localhost:3000/interact/';
v_msgurl:string='http://localhost:3000/viewedMessages/';
updateurl:string='http://localhost:3000/reply/';
  url1:string;
  url2:string;
  constructor(public _http:HttpClient) { }

  getMessagesByUserid(fk_t_id:number)
  {
  return this._http.get(this.sendmsgurl+fk_t_id);
  }
  getStudentByUserId(fk_u_id:number)
  {
    return this._http.get(this.getstudentinfo+fk_u_id);  
  }
  sendReplyMessage(item)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.sendmsgurl,body,{headers:h});
  }
  getUserId(m_id:number)
  {
  return this._http.get(this.sendmsgurl1+m_id);
  }
  getReplyByid(fk_u_id:number)
  {
    return this._http.get(this.replyurl+fk_u_id);
  }
  getRepliesByid(fk_u_id:number,fk_t_id:number)
  {
    this.url1=this.replyurl+fk_u_id+"/"+fk_t_id;
    console.log(this.url1);
    return this._http.get(this.url1);
  }
  getMessageforDisplay(fk_u_id:number,fk_t_id:number)
  {
    this.url2=this.msgurl+fk_u_id+"/"+fk_t_id;
    console.log(this.url2);
    return this._http.get(this.url2);
  }
  getViewedMessages(fk_t_id:number)
{
  return this._http.get(this.v_msgurl+fk_t_id);
}
updateStatus(item)
{
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.updateurl+item.m_id,body,{headers:h});
  
}
}
