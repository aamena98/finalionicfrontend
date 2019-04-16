import { Component, OnInit } from '@angular/core';
import { Leave } from "../../Classes/Leave";
import { Validators, FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { LeaveService } from "../Services/leave.service";

var moment=require('moment');
moment().format();
@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {
  myForm:FormGroup;  
  minDate;
  fk_u_id:number=201899;
  l_fromdate:Date;
  l_todate:Date;
  totalDays:number;
  l_description:string;
  l_type:string;
  fk_t_number:number=parseInt(localStorage.getItem('user_id'));;
  l_date:Date;

  
  to_date:FormControl;
  from_date:FormControl;
  leave_description:FormControl;
  usertype_arr:string[]=['Parent','Teacher'];
  leave_type:FormControl;
  userData={"to_date":"","from_date":"","leave_description":""};

  constructor(private _ser:LeaveService) { 
    this.minDate = moment(Date.now()).format("YYYY-MM-DD");
  }

  ngOnInit() {
    this.myForm=new FormGroup({
      to_date:new FormControl('',[Validators.required]),
      from_date:new FormControl('',[Validators.required]),
      leave_type:new FormControl('',[Validators.required]),
     });
  }

  sendLeave()
  {
    
    var now = moment(this.l_fromdate); //todays date
    var end = moment(this.l_todate); // another date
    var duration = moment.duration(now.diff(end));
    this.totalDays = duration.asDays();
   this.totalDays=this.totalDays*-1;
  this.l_date=moment(Date.now()).format("YYYY-MM-DD");
  console.log(this.l_date);
    console.log("total days"+this.totalDays);
    this._ser.AddLeave(new Leave(this.fk_u_id,this.l_fromdate,this.l_todate,this.totalDays,this.l_type,this.l_description,this.fk_t_number,this.l_date)).subscribe(
        (data:any)=>{
          console.log(data);
          alert('Your request for leave has been sent');
        }
      );
  }
  
  exampleValidator(control:FormControl):{[s: string]: boolean}{

    if(control.value==="Example"){
    return {example:true};
    }
    return null;
    
    }
    
}
