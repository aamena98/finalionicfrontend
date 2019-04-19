import { Component, OnInit } from '@angular/core';
import { remark } from "../../Classes/remark";
import { RemarkService } from "../Services/remark.service";
import { remarkTeacher } from "../../Classes/remarkTeacher";
import { Router } from "@angular/router";
@Component({
  selector: 'app-display-remark',
  templateUrl: './display-remark.page.html',
  styleUrls: ['./display-remark.page.scss'],
})
export class DisplayRemarkPage implements OnInit {

  r_arr:remarkTeacher[]=[];
 // v_arr:remarkTeacher[]=[];
  r_fk_u_id:number=parseInt(localStorage.getItem('user_id'));
  v_arr:remarkTeacher[]=[];
  flag1:boolean=true;
  flag2:boolean=false;
  constructor(private _ser:RemarkService,private _route:Router) { }

  ngOnInit() {
    this.flag1=true;
    this.flag2=false;
    this._ser.viewRemarkByid(this.r_fk_u_id).subscribe(
      (data:remarkTeacher[])=>
      {
        console.log(data);
        this.r_arr=data;
      }
    );
  }
  onback()
{
    this._route.navigate(['/parent-dash-board-page']);
}

  showremarks()
  {
    this.flag1=true;
    this.flag2=false;
    this._ser.viewRemarkByid(this.r_fk_u_id).subscribe(
      (data:remarkTeacher[])=>
      {
          console.log(data);
          this.r_arr=data;
      }
    );
  }
  showviewed()
  {
    this.flag1=false;
    this.flag2=true;
    this._ser.viewedRemarks(this.r_fk_u_id).subscribe(
      (data:remarkTeacher[])=>
      {
          console.log(data);
          this.v_arr=data;
      }
    );
  }
  updateStatus(item:remark)
  {
    this._ser.updateRemarkStatus(item).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.flag1=false;
    this.flag2=true;
      }
    );
  }
}
