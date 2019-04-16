import { Injectable } from '@angular/core';
import {interact} from '../../Classes/interaction';
import { Teacher } from '../../Classes/teacher';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParentInteractService {
  teachergetaddurl:string='http://localhost:3000/teacher/';
  sendmsgurl:string='http://localhost:3000/interact/';
  replyurl:string='http://localhost:3000/replyDisplay/';
  repliesurl:string='http://localhost:3000/studentInteract/';
  v_replyurl:string='http://localhost:3000/viewedReply/';

  constructor(public _http:HttpClient) { }

  viewTeacherList()
  {
    return this._http.get(this.teachergetaddurl);
  }
  
  SendMessage(item:interact){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.sendmsgurl,body,{headers:h});
  }
  getMessages()
{
  return this._http.get(this.sendmsgurl);
}
getMessagebyId(id:number)
{
  return this._http.get(this.sendmsgurl+id);
}
getReply(fk_u_id:number)
{
  return this._http.get(this.replyurl+fk_u_id);
}
 
getRepliesByid(r_id:number)
{
  return this._http.get(this.repliesurl+r_id);
}
getViewedReplies(r_id:number)
{
  return this._http.get(this.v_replyurl+r_id);
}
updateStatus(item)
{
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.sendmsgurl+item.r_id,body,{headers:h});
  
}

}
