import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherInteractionService } from '../../Services/teacher-interaction.service';
import { interact } from '../../../Classes/interaction';
//import { Student } from '../../../Classes/student';
import { interact_display } from '../../../Classes/Interact_Display';
import { reply_Message } from '../../../Classes/Reply_Message';
// var moment = require('moment');
// moment().format();
@Component({
  selector: 'app-teacher-interaction',
  templateUrl: './teacher-interaction.page.html',
  styleUrls: ['./teacher-interaction.page.scss'],
})
export class TeacherInteractionPage implements OnInit {

s_name:string;
s_roll_no:number;
s_class:number;
s_div:string;
i_arr:interact[]=[];
fk_t_id:number=parseInt(localStorage.getItem('user_id'));
fk_u_id:number;
fk_u_id_arr:number[]=[];
inter_arr:interact_display[]=[];
m_reply:string;
u_m_id:number;
flag:boolean=false;
r_msg_arr:reply_Message[]=[];
m_id:number;
m_date:Date;
r_flag:boolean=false;
b_flag:boolean=true;
unviewed:boolean=true;
viewed:boolean=false;
viewedmessages:interact_display[]=[];
constructor(private _ser:TeacherInteractionService,private _route:Router) { }

  ngOnInit() {
    this._ser.getMessagesByUserid(this.fk_t_id).subscribe(
      (data:interact_display[])=>
      {
        console.log(data);
        this.inter_arr=data;
       }
    );
  }
  Reply(item:interact_display)
  {
    this.u_m_id=item.m_id;
    this._ser.updateStatus(item).subscribe(
      (data:any)=>{
      console.log(data);
      }
    );
    this._route.navigate(['/reply-page',this.u_m_id]);
  }
  sendReply(m_id:number,fk_u_id:number)
  {
    //console.log(m_id);
  //this.m_date=moment(Date.now()).format("YYYY-MM-DD");
    this._ser.sendReplyMessage(new reply_Message(m_id,this.m_reply,fk_u_id,this.m_date,this.fk_t_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.flag=false;
        this.r_flag=true;
        this.b_flag=false;
      }
    );
    
  }
  showviewed()
  {
this.viewed=true;
this.unviewed=false;
this._ser.getViewedMessages(this.fk_t_id).subscribe(
  (data:interact_display[])=>
  {
    console.log(data);
      this.viewedmessages=data;
  }
);

  }
  showunviewed()
  {
this.unviewed=true;
this.viewed=false;
this._ser.getMessagesByUserid(this.fk_t_id).subscribe(
  (data:interact_display[])=>
  {
    console.log(data);
    this.inter_arr=data;
   }
);
  }
}
