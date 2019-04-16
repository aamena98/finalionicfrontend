import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServicesService } from '../Services/login-services.service';
import { User } from '../../Classes/User';
import { email } from '../../Classes/emailclass';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Student } from '../../Classes/student';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  user_id:number=parseInt(localStorage.getItem('user_id'));
  //user_id:number=201888;
  user_password:string;
  user_confirm_password:string;
  usertype_arr:string[]=['Parent','Teacher','Admin'];
  user_type:string;
  
  constructor(public _router:Router,private _ser:LoginServicesService) { }

  ngOnInit() {
  }
  public type = 'password';
  public icon:String="eye";
  userType:String;
  public showPass = false; 
  flag:boolean=true;
  password:String;
  userId:String;
  email_id:String;
  
  
  showPassword() 
  {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.icon="eye-off";
      this.type = 'text';
    } 
    else {
      this.icon="eye";
      this.type = 'password';
    }
    console.log(this.user_id);
  }

  onforget()
  {
    this._ser.getStudentByUserId(this.user_id).subscribe(
      (data:Student[])=>{
        this.password=data[0].s_password;
        console.log(data);
        this._ser.onEmail(new email(this.email_id,"Password of user id: "+this.user_id,"Your password is: "+this.password)).subscribe(
          (data:email)=>{
            console.log(data);
            alert("Email successfully send!!");
            
          }
        )
      }
    )
    this._router.navigate(['/login-page']);
  }

  onCancel()
  {
    this._router.navigate(['/login-page']);
  }


}
