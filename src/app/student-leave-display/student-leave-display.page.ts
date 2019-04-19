import { Component, OnInit } from '@angular/core';
import { LeaveService } from "../Services/leave.service";
import { Leaves } from "../../Classes/leaves";
import { Router } from "@angular/router";

@Component({
  selector: 'app-student-leave-display',
  templateUrl: './student-leave-display.page.html',
  styleUrls: ['./student-leave-display.page.scss'],
})
export class StudentLeaveDisplayPage implements OnInit {

  a_l_arr:Leaves[]=[];
  r_l_arr:Leaves[]=[];
  fk_u_id:number=parseInt(localStorage.getItem('user_id'));
  constructor(private _ser:LeaveService,private _route:Router) { }

  ngOnInit() {
    this._ser.getAcceptedLeavesforStudent(this.fk_u_id).subscribe(
      (data:Leaves[])=>
      {
          this.a_l_arr=data;
          console.log(data);
      }
    );

    this._ser.getRejectedLeavesforStudent(this.fk_u_id).subscribe(
      (data:Leaves[])=>
      {
        this.r_l_arr=data;
        console.log(data);
      }
    );
  }
  onback()
  {
      this._route.navigate(['/parent-dash-board-page']);
  }
  
}
