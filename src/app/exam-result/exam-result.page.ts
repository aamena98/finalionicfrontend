import { Component, OnInit } from '@angular/core';
import { examResult } from "../../Classes/examResult";
import { ExamResultService } from "../Services/exam-result.service";
import { stringify } from '@angular/compiler/src/util';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Router } from "@angular/router";
@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.page.html',
  styleUrls: ['./exam-result.page.scss'],
})
export class ExamResultPage implements OnInit {

e_arr:examResult[]=[];
fk_u_id:number=parseInt(localStorage.getItem('user_id'));;
sub1:string;
sub2:string;
sub3:string;
sub4:string;
sub5:string;
hmark1:number;
hmark2:number;
hmark3:number;
hmark4:number;
hmark5:number;
fmark1:number;
fmark2:number;
fmark3:number;
fmark4:number;
fmark5:number;

halftotal:number;
finaltotal:number;
HalfactualTotal:number;
finalactualTotal:number;
halfavg:number;
finalavg:number;
r_examtype:string;
halfflag:boolean=true;
finalflag:boolean=false;
g1:string;
g2:string;
g3:string;
g4:string;
g5:string;
finalgrade:string;

grade:string;
constructor(private _route:Router,private _ser:ExamResultService) { }
onback()
{
    this._route.navigate(['/parent-dash-board-page']);
}

  ngOnInit() {

    this.halfflag=true;
    this.finalflag=false;
 this.r_examtype="HALF-YEARLY EXAM";
 this.HalfactualTotal=250;
    this._ser.getResultByID(this.fk_u_id,this.r_examtype).subscribe(
      (data:examResult[])=>
      {
        this.e_arr=data;
          this.sub1=this.e_arr[0].r_sub1;
          this.sub2=this.e_arr[0].r_sub2;
          this.sub3=this.e_arr[0].r_sub3;
          this.sub4=this.e_arr[0].r_sub4;
          this.sub5=this.e_arr[0].r_sub5;
          this.hmark1=this.e_arr[0].r_mark1;
          this.hmark2=this.e_arr[0].r_mark2;
          this.hmark3=this.e_arr[0].r_mark3;
          this.hmark4=this.e_arr[0].r_mark4;
          this.hmark5=this.e_arr[0].r_mark5;

          this.halftotal=this.hmark1+this.hmark2+this.hmark3+this.hmark4+this.hmark5;
console.log(this.halftotal);
 this.halfavg=(this.halftotal/this.HalfactualTotal)*100;
 this.g1=this.findgrade(this.hmark1);
 this.g2=this.findgrade(this.hmark2);
 this.g3=this.findgrade(this.hmark3);
 this.g4=this.findgrade(this.hmark4);
 this.g5=this.findgrade(this.hmark5);
 this.finalgrade=this.findgrade(this.halfavg);
        }
    );

  
  }

findgrade(mark:number)
{
  if(mark>=90)
  {
    this.grade="A+";
  }
 else if(mark>=70 && mark<=89)
  {
    this.grade="A";
  }
  else if(mark>=60 && mark<=69)
  {
    this.grade="B+";
  }
  else if(mark>=40 && mark<=59)
  {
    this.grade="B";
  }
  else if(mark<=39)
  {
    this.grade="C";
  }
 return this.grade;
}
showhalfyearly()
{
    this.halfflag=true;
    this.finalflag=false;
 this.r_examtype="HALF-YEARLY EXAM";
 this.HalfactualTotal=250;
    this._ser.getResultByID(this.fk_u_id,this.r_examtype).subscribe(
      (data:examResult[])=>
      {
        this.e_arr=data;
          this.sub1=this.e_arr[0].r_sub1;
          this.sub2=this.e_arr[0].r_sub2;
          this.sub3=this.e_arr[0].r_sub3;
          this.sub4=this.e_arr[0].r_sub4;
          this.sub5=this.e_arr[0].r_sub5;
          this.hmark1=this.e_arr[0].r_mark1;
          this.hmark2=this.e_arr[0].r_mark2;
          this.hmark3=this.e_arr[0].r_mark3;
          this.hmark4=this.e_arr[0].r_mark4;
          this.hmark5=this.e_arr[0].r_mark5;
          this.halftotal=this.hmark1+this.hmark2+this.hmark3+this.hmark4+this.hmark5;
          console.log(this.halftotal);
           this.halfavg=(this.halftotal/this.HalfactualTotal)*100;
           console.log(this.halfavg);
           this.halfavg=Math.floor(this.halfavg);
           console.log(this.halfavg);
           this.g1=this.findgrade(this.hmark1);
           this.g2=this.findgrade(this.hmark2);
           this.g3=this.findgrade(this.hmark3);
           this.g4=this.findgrade(this.hmark4);
           this.g5=this.findgrade(this.hmark5);
           this.finalgrade=this.findgrade(this.halfavg);
            
        }
    );
}


showfinal()
{
  this.halfflag=false;
  this.finalflag=true;
 this.r_examtype="FINAL EXAM";
this.finalactualTotal=500;
 this._ser.getResultByID(this.fk_u_id,this.r_examtype).subscribe(
    (data:examResult[])=>
    {
      this.e_arr=data;
        this.sub1=this.e_arr[0].r_sub1;
        this.sub2=this.e_arr[0].r_sub2;
        this.sub3=this.e_arr[0].r_sub3;
        this.sub4=this.e_arr[0].r_sub4;
        this.sub5=this.e_arr[0].r_sub5;
        this.fmark1=this.e_arr[0].r_mark1;
        this.fmark2=this.e_arr[0].r_mark2;
        this.fmark3=this.e_arr[0].r_mark3;
        this.fmark4=this.e_arr[0].r_mark4;
        this.fmark5=this.e_arr[0].r_mark5;
        this.finaltotal=this.fmark1+this.fmark2+this.fmark3+this.fmark4+this.fmark5;
        this.finalavg=(this.finaltotal/this.finalactualTotal)*100;
        console.log(this.finalavg);
        this.finalavg=Math.round(this.finalavg);
        console.log(this.finalavg);
         this.g1=this.findgrade(this.fmark1);
         this.g2=this.findgrade(this.fmark2);
         this.g3=this.findgrade(this.fmark3);
         this.g4=this.findgrade(this.fmark4);
         this.g5=this.findgrade(this.fmark5);
         this.finalgrade=this.findgrade(this.finalavg);
        
      }
  );
}
}
