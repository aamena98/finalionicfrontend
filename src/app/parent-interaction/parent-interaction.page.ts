declare var require:any;
import { Component, OnInit } from '@angular/core';
import { ParentInteractService } from '../Services/parent-interact.service';
import { Teacher } from '../../Classes/teacher';
import { Router } from '@angular/router';

import { interact } from 'src/Classes/interaction';
import { interact_display } from "../../Classes/Interact_Display";
import { Validators, FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';
var moment = require('moment');
moment().format();
@Component({
  selector: 'app-parent-interaction',
  templateUrl: './parent-interaction.page.html',
  styleUrls: ['./parent-interaction.page.scss'],
})
export class ParentInteractionPage implements OnInit {
myForm:FormGroup;
t_arr:Teacher[]=[];
t_id:number;
fk_t_id:FormControl;
m_description:FormControl;
m_date:Date;
fk_u_id:FormControl;
userData={"fk_t_id":"","m_description":""};
i_arr:interact_display[]=[];
fk_user_id:number=parseInt(localStorage.getItem('user_id'));
  constructor(private _ser:ParentInteractService,private _route:Router) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      fk_t_id:new FormControl('',[Validators.required]),
      m_description:new FormControl('',[Validators.required]),
      
     });
    this._ser.viewTeacherList().subscribe(
      (data:Teacher[])=>{
        console.log(data);
        this.t_arr=data;
      
      }
    );
  }
  exampleValidator(control:FormControl):{[s: string]: boolean}{

    if(control.value==="Example"){
    return {example:true};
    }
    return null;
    
    }
    onback()
{
    this._route.navigate(['/parent-dash-board-page']);
}

  sendmsg()
  {
this.m_date=moment(Date.now()).format("YYYY-MM-DD");
    console.log(this.m_date);
    console.log(this.fk_u_id);
    console.log(this.fk_t_id);
    console.log(this.m_description);

    this._ser.SendMessage(new interact(this.fk_user_id,parseInt(this.fk_t_id.toString()),this.m_description.toString(),this.m_date)).subscribe(
      (data:any)=>{
        console.log(data);
       // this._route.navigate(['/parent-chat-display',this.fk_u_id]);
        alert('Message sent successfully');
      }
    );
  }

}
