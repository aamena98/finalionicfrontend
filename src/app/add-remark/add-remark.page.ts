declare var require:any;
import { Component, OnInit } from '@angular/core';
import { RemarkService } from "../Services/remark.service";
import { remark } from "../../Classes/remark";
import { AttendanceService } from "../Services/attendance.service";
import { Student } from "../../Classes/student";
import { Router } from "@angular/router";
var moment=require('moment');
moment().format();

@Component({
  selector: 'app-add-remark',
  templateUrl: './add-remark.page.html',
  styleUrls: ['./add-remark.page.scss'],
})
export class AddRemarkPage implements OnInit {

  stu_arr:Student[]=[];
  class:number;
  div:string;
  class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
  div_arr:string[]=["A","B"];
  r_desc:string;
  r_fk_t_id:number=parseInt(localStorage.getItem('user_id'));
  r_fk_u_id:number;
  r_status:string;
  r_date:Date;
  flag1:boolean=true;
  flag2:boolean=false;

  constructor(private _ser:RemarkService,private _serv:AttendanceService,private _route:Router) { }

  ngOnInit() {
   
  }
  onback()
{
    this._route.navigate(['/teacher-dashboarf']);
}

  getstu()
  {
    this.flag1=false;
this.flag2=true;
    this._serv.getStudentByclassdiv(this.class,this.div).subscribe(
      (data:Student[])=>
      {
        console.log(data);
        this.stu_arr=data;
      }
    );
  }
  addremark(fk_u_id:number)
  {
    this._route.navigate(['/add-remark-desc/'+fk_u_id]);
  }
}
