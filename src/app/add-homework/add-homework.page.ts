import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../Classes/student';
import { HomeworkserviceService } from "../Services/homeworkservice.service";
import { Homework } from '../../Classes/Homework';
@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.page.html',
  styleUrls: ['./add-homework.page.scss'],
})
export class AddHomeworkPage implements OnInit {

  class_arr:number[]=[1,2,3,4,5,6,7,8,9,10];
div_arr:string[]=['A','B','C'];
h_class:number;
h_div:string;
h_date:Date;
h_description:string;
h_upload:string;
h_subject:string;
h_arr:Homework[]=[];
  constructor(private _ser:HomeworkserviceService) { }

  ngOnInit() {
  }
  addhw()
  {
    this.h_upload="Sangeeta";
    console.log(this.h_upload);
    console.log(this.h_class);
    console.log(this.h_div);
  this._ser.addhw(new Homework(this.h_subject,this.h_date,this.h_description,this.h_upload,this.h_class,this.h_div)).subscribe(
    (data:any)=>
    {
      console.log(this.h_upload);
      console.log(data);
    }
  );
  }
}
