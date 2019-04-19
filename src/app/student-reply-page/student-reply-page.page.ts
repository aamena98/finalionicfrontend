declare var require:any;
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ParentInteractService } from '../Services/parent-interact.service';
import { TeacherInteractionService } from '../Services/teacher-interaction.service';
import { reply_Message } from '../../Classes/Reply_Message';
import { interact } from '../../Classes/interaction';
var moment = require('moment');
moment().format();

@Component({
  selector: 'app-student-reply-page',
  templateUrl: './student-reply-page.page.html',
  styleUrls: ['./student-reply-page.page.scss'],
})
export class StudentReplyPagePage implements OnInit {
  m_id:number;
  m_date:Date;
  m_reply:string;
  fk_u_id:number; 
  m_arr:interact[]=[];
  r_desc:string;
  r_fk_t_id:number;
  r_fk_u_id:number;
  message_arr:interact[]=[];
  reply_arr:reply_Message[]=[];
  
  constructor(private _aroute:ActivatedRoute,private _ser1:TeacherInteractionService,private _ser:ParentInteractService,private _route:Router) { }
  
    ngOnInit() {
      this.m_id=this._aroute.snapshot.params['id'];
      console.log(this.m_id);
   this._ser.getRepliesByid(this.m_id).subscribe(
     (data:reply_Message[])=>
     {
       this.reply_arr=data;
      this.r_fk_t_id=this.reply_arr[0].r_fk_t_id;
      this.r_fk_u_id=this.reply_arr[0].r_fk_u_id;
       this.r_desc=this.reply_arr[0].r_description;
       console.log(this.r_fk_t_id);
       console.log(this.r_fk_u_id);
        this._ser1.getRepliesByid(this.r_fk_u_id,this.r_fk_t_id).subscribe(
          (data:reply_Message[])=>
          {
            //console.log(data);
            this.reply_arr=data;
            console.log(this.reply_arr);
          }
        );
        this._ser1.getMessageforDisplay(this.r_fk_u_id,this.r_fk_t_id).subscribe(
          (data:interact[])=>{
            //console.log(data);
            this.message_arr=data;
            console.log(this.message_arr);
          }
        );
           }
   );
  
  
    }
    onback()
    {
        this._route.navigate(['/parent-chat-display']);
    }
    
    sendReply()
  {
 this.m_date=moment(Date.now()).format("YYYY-MM-DD");
    this._ser1.sendReplyMessage(new reply_Message(this.m_id,this.m_reply,this.r_fk_u_id,this.m_date,this.r_fk_t_id)).subscribe(
      (data:any)=>
      {
     console.log(data);
        this._route.navigate(['/parent-dash-board-page']);
        // this.flag=false;
        // this.r_flag=true;
        // this.b_flag=false;
      }
    );
   
  }
  
  
}
