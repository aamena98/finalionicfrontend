import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AttendanceService } from '../Services/attendance.service';
import { Student } from '../../Classes/student';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {
  stu_arr:Student[];
  user_id:number=parseInt(localStorage.getItem('user_id'));
  path:string;
  constructor(public _router:Router,private _ser:AttendanceService) { }

  ngOnInit() {
   this._ser.getStudentByUserId(this.user_id).subscribe(
     (data:Student[])=>{
       console.log(data);
       this.stu_arr=data;
     }
   );
  }


}
