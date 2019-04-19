import { Component, OnInit } from '@angular/core';
import { Teacher } from "../../Classes/teacher";
import { TeacherInteractionService } from "../Services/teacher-interaction.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.page.html',
  styleUrls: ['./teacher-profile.page.scss'],
})
export class TeacherProfilePage implements OnInit {

  t_arr:Teacher[]=[];
  user_id:number=parseInt(localStorage.getItem('user_id'));
  constructor(private _ser:TeacherInteractionService,private _route:Router) { }
  onback()
  {
      this._route.navigate(['/teacher-dashboarf']);
  }
  
  ngOnInit() {
    this._ser.getTeacherByUserId(this.user_id).subscribe(
      (data:any)=>{
        console.log(this.user_id);

        this.t_arr=data;
        console.log(data);
      }
    );
  }

}
