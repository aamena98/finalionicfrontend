import { Component, OnInit } from '@angular/core';
import { ParentInteractService } from '../Services/parent-interact.service';
import { Teacher } from '../../Classes/teacher';
import { Router } from '@angular/router';
import { interact } from '../../Classes/interaction';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { reply_Message } from '../../Classes/Reply_Message';
@Component({
  selector: 'app-interaction-display',
  templateUrl: './interaction-display.page.html',
  styleUrls: ['./interaction-display.page.scss'],
})
export class InteractionDisplayPage implements OnInit {

  i_arr:interact[]=[];
  fk_u_id:number=parseInt(localStorage.getItem('user_id'));
  final_arr:string[]=[];
  reply_arr:reply_Message[]=[];
  constructor(private _ser:ParentInteractService,private _route:Router) { }

  ngOnInit() {
  //  this._ser.getReplies(this.fk_u_id).subscribe(
  //    (data:reply_Message[])=>
  //    {
  //     this.reply_arr=data;
  //    }
  //  );
  }

  
}
