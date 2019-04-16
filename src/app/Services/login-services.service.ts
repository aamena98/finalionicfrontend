import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../../Classes/User';
import { email } from "../../Classes/emailclass";
import { Student } from '../../Classes/student';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {


  loginurl:string='http://localhost:3000/login/';
  userurl:string='http://localhost:3000/userupdate/';
  usergeturl:string='http://localhost:3000/user/';
  studentsurl:string='http://localhost:3000/students/'
  passupdateurl:string='http://localhost:3000/updatepass/'
  emailurl:string='http://localhost:3000/emailvarify/';

  constructor(public _http:HttpClient) { }

  onLogin(item:User)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.loginurl,body,{headers:h});
  }

  getStudentByUserId(user_id:number)
  {
    return this._http.get(this.studentsurl+user_id);
  }
  getstudent()
  {
    return this._http.get(this.studentsurl);
  }
  onEmail(item:email)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.emailurl,body,{headers:h});
  }

  onChangePassword(item:Student)
  {
  
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.passupdateurl+item.fk_u_id,body,{headers:h});
  
  }

  onChangeuser(item:User)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.userurl+item.user_id,body,{headers:h});
  }
  ongetUserById(user_id:number)
  {
    return this._http.get(this.usergeturl+user_id);
  }


}

