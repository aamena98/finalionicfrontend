import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TeacherInteractionService } from '../Services/teacher-interaction.service';
import { reply_Message } from '../../Classes/Reply_Message';
import { interact } from '../../Classes/interaction';
import { student_interact_display } from "../../Classes/student_interact_display";
import { ParentInteractService } from "../Services/parent-interact.service";
var moment = require('moment');
moment().format();

@Component({
  selector: 'app-parent-chat-display',
  templateUrl: './parent-chat-display.page.html',
  styleUrls: ['./parent-chat-display.page.scss'],
})
export class ParentChatDisplayPage implements OnInit {

viewed:boolean=false;
unviewed:boolean=true;
m_id:number;
m_date:Date;
m_reply:string;
fk_u_id:number=parseInt(localStorage.getItem('user_id')); 
m_arr:student_interact_display[]=[];
v_m_arr:student_interact_display[]=[];
m_desc:string;
r_fk_t_id:number;
r_fk_u_id:number;
message_arr:student_interact_display[]=[];
reply_arr:reply_Message[]=[];
t_name:string;
//public t_name:string,
//public m_id:number,
m_description:string;
u_r_id:number;
//m_date:Date

  constructor(private _aroute:ActivatedRoute,private _ser:ParentInteractService,private _route:Router) { }

  ngOnInit() {
    //this.fk_u_id=this._aroute.snapshot.params['id'];
    console.log(this.fk_u_id);
 this._ser.getReply(this.fk_u_id).subscribe(
   (data:student_interact_display[])=>
   {
console.log(this.m_arr);
    this.m_arr=data;
      // this._ser.getRepliesByid(this.r_fk_u_id,this.r_fk_t_id).subscribe(
      //   (data:reply_Message[])=>
      //   {
      //     //console.log(data);
      //     this.reply_arr=data;
      //     console.log(this.reply_arr);
      //   }
      // );
      // this._ser.getMessageforDisplay(this.r_fk_u_id,this.r_fk_t_id).subscribe(
      //   (data:interact[])=>{
      //     //console.log(data);
      //     this.message_arr=data;
      //     console.log(this.message_arr);
      //   }
      // );
         }
 );


  }
  Reply(item:student_interact_display)
  {
    this.u_r_id=item.r_id;
    this._ser.updateStatus(item).subscribe(
      (data:any)=>
      {
          console.log(data);
      }
    );
    this._route.navigate(['/student-reply-page',this.u_r_id]);
  }
  showunviewed()
  {
this.unviewed=true;
this.viewed=false;
this._ser.getReply(this.fk_u_id).subscribe(
  (data:student_interact_display[])=>
  {
console.log(this.m_arr);
   this.m_arr=data;
  });
  }
  showviewed()
  {
    this.unviewed=false;
    this.viewed=true;
    this._ser.getViewedReplies(this.fk_u_id).subscribe(
      (data:student_interact_display[])=>
      {
    //console.log(this.m_arr)
       this.v_m_arr=data;
      });        
  }
}
