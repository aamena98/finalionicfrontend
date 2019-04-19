import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HomeworkserviceService } from '../Services/homeworkservice.service';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.page.html',
  styleUrls: ['./home-work.page.scss'],
})
export class HomeWorkPage implements OnInit {
  user_id:number=parseInt(localStorage.getItem('user_id'));
  class_id:number;
  div:string;
  hw_arr:any[];
  
  constructor(public _router:Router,public _ser:HomeworkserviceService) { }
  onback()
  {
      this._router.navigate(['/parent-dash-board-page']);
  }
  
  ngOnInit() {
   // this.user_id=localStorage.getItem('user_id');
   this.class_id=parseInt(localStorage.getItem('class'));
    this.div=localStorage.getItem('div');
    console.log(this.class_id);
    console.log(this.div);
    
    this._ser.onhomework(this.class_id,this.div).subscribe(
      (data:any[])=>{
        console.log(data);
        this.hw_arr=data;
      }
    )
    
  }
  


}
