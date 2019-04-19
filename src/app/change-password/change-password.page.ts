import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServicesService } from "../../app/Services/login-services.service";
import { User } from '../../Classes/User';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Student } from '../../Classes/student'


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  user_id:number=parseInt(localStorage.getItem('user_id'));
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
  onback()
{
    this._router.navigate(['/parent-dash-board-page']);
}

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
    console.log(this.user_id);this
  }

  onchangepassword()
  {
    
    if(this.user_password!=this.user_confirm_password)
    {
      alert('Please re-enter details!!Password is wrong!!');
    }
    else
    {
      this._ser.getStudentByUserId(this.user_id).subscribe(
        (data:Student[])=>{
          
              this._ser.onChangePassword(new Student(data[0].s_roll_no,data[0].s_sname,data[0].s_fname,data[0].s_lname,data[0].s_gender,data[0].s_dob,data[0].s_email,data[0].s_address,data[0].s_class,data[0].s_div,data[0].s_contactno,data[0].s_category,data[0].s_bloodgroup,
                this.user_password,data[0].fk_u_id,data[0].s_profilepic)).subscribe(
                (data:Student[])=>{
                  this._ser.ongetUserById(this.user_id).subscribe(
                    (data:User[])=>{
                  
                  this._ser.onChangeuser(new User(this.user_id,this.user_password,data[0].user_type)).subscribe(
                    (data:User[])=>{
                      console.log(data);
                    }
                    )
                  }
                  )
                  console.log(data);
                  console.log("updated!!");
                }
              
          )
        }
      )
      this._router.navigate(['/login-page']);
    }
  }

  onCancel()
    {
      this._router.navigate(['/login-page']);
    }



}
