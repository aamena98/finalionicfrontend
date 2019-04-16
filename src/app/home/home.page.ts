import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServicesService } from "../Services/login-services.service";
import { Validators, FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { User } from '../../Classes/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myForm:FormGroup;
  user_id:FormControl;
  user_password:FormControl;
  usertype_arr:string[]=['Parent','Teacher','Admin'];
  user_type:FormControl;
  userData={"user_id":"","user_password":"","user_type":""};
  userid:string;
  userpassword:string;
  usertype:string;
  // u_password:string;
  // flag:boolean=true;
  
  constructor(public _router:Router,private _ser:LoginServicesService) { 
  
  }
  
  ngOnInit() {
   this.myForm=new FormGroup({
    user_id:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(8)]),
    user_password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    user_type:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
   });
  }
  
  
  public type = 'password';
  public icon:String="eye";
  userType:String;
  public showPass = false; 
  flag:boolean=true;
  password:String;
  userId:string;
  
  

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
  }
  
  onlogin()
  {
   this._router.navigate(['/login-page']); 
    }
    

  showHide()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }

}
