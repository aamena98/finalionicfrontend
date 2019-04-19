declare var require:any;
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TeacherInteractionService } from '../Services/teacher-interaction.service';
import { reply_Message } from '../../Classes/Reply_Message';
import { interact } from '../../Classes/interaction';
var moment = require('moment');
moment().format();

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.page.html',
  styleUrls: ['./reply-page.page.scss'],
})
export class ReplyPagePage implements OnInit {

  m_id:number;
m_date:Date;
m_reply:string;
fk_u_id:number; 
m_arr:interact[]=[];
m_desc:string;
r_fk_t_id:number;
r_fk_u_id:number;
message_arr:interact[]=[];
reply_arr:reply_Message[]=[];

constructor(private _aroute:ActivatedRoute,private _ser:TeacherInteractionService,private _route:Router) { }

onback()
{
    this._route.navigate(['/teacher-interaction']);
}

  ngOnInit() {
    this.m_id=this._aroute.snapshot.params['id'];
    console.log(this.m_id);
 this._ser.getUserId(this.m_id).subscribe(
   (data:interact[])=>
   {
     this.m_arr=data;
    this.r_fk_t_id=this.m_arr[0].fk_t_id;
    this.r_fk_u_id=this.m_arr[0].fk_u_id;
     this.m_desc=this.m_arr[0].m_description;
     console.log(this.r_fk_t_id);
     console.log(this.r_fk_u_id);
      this._ser.getRepliesByid(this.r_fk_u_id,this.r_fk_t_id).subscribe(
        (data:reply_Message[])=>
        {
          //console.log(data);
          this.reply_arr=data;
          console.log(this.reply_arr);
        }
      );
      this._ser.getMessageforDisplay(this.r_fk_u_id,this.r_fk_t_id).subscribe(
        (data:interact[])=>{
          //console.log(data);
          this.message_arr=data;
          console.log(this.message_arr);
        }
      );
         }
 );


  }

  sendReply()
{
this.m_date=moment(Date.now()).format("YYYY-MM-DD");
  this._ser.sendReplyMessage(new reply_Message(this.m_id,this.m_reply,this.r_fk_u_id,this.m_date,this.r_fk_t_id)).subscribe(
    (data:any)=>
    {
   console.log(data);
      this._route.navigate(['/teacher-interaction']);
      // this.flag=false;
      // this.r_flag=true;
      // this.b_flag=false;
    }
  );
 
}

}
