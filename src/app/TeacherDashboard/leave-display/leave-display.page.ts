import { Component, OnInit } from '@angular/core';
import { LeaveService } from "../../Services/leave.service";
import { Leave } from "../../../Classes/Leave";
import { Leave_Display } from "../../../Classes/Leave_display";
import { Router } from "@angular/router";
@Component({
  selector: 'app-leave-display',
  templateUrl: './leave-display.page.html',
  styleUrls: ['./leave-display.page.scss'],
})
export class LeaveDisplayPage implements OnInit {

  l_arr:Leave_Display[]=[];
  fk_t_id:number=parseInt(localStorage.getItem('user_id'));
  accept:boolean=false;
  reject:boolean=false;
  all:boolean=true;

  accept_arr:Leave_Display[]=[];
  reject_arr:Leave_Display[]=[];
  constructor(private _ser:LeaveService,private _route:Router) { }

  ngOnInit() {
    this._ser.getAllInfo(this.fk_t_id).subscribe(
      (data:Leave_Display[])=>{
        console.log(data);
        this.l_arr=data;
      }
    );
    }
    onaccept(item:Leave)
    {
     this._ser.updateAcceptStatus(item).subscribe(
       (data:any)=>{
         console.log(data);
         this.accept_arr=data;
        }
      );
    }
    onreject(item:Leave)
    {
      this._ser.updateRejectStatus(item).subscribe(
        (data:any)=>{
          console.log(data);
         this.reject_arr=data;
        }
      );
    }
    showaccepted()
    {
      this.all=false;
      this.accept=true;
      this.reject=false;
      this._ser.getAllAccepted(this.fk_t_id).subscribe(
        (data:Leave_Display[])=>
        {
          this.accept_arr=data;
        }
      );
    }
    showall()
    {
      this.all=true;
      this.accept=false;
      this.reject=false;
      this._ser.getAllInfo(this.fk_t_id).subscribe(
        (data:Leave_Display[])=>{
          console.log(data);
          this.l_arr=data;
        }
      );
    }
    onback()
{
    this._route.navigate(['/teacher-dashboarf']);
}

    showrejected()
    {
      this.all=false;
      this.accept=false;
      this.reject=true;
      this._ser.getAllRejected(this.fk_t_id).subscribe(
        (data:Leave_Display[])=>
        {
          this.reject_arr=data;
        }
      );
    }
}
