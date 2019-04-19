import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Student } from "../../Classes/Student";
import { LoginServicesService } from "../Services/login-services.service";

@Component({
  selector: 'app-parent-dash-board-page',
  templateUrl: './parent-dash-board-page.page.html',
  styleUrls: ['./parent-dash-board-page.page.scss'],
})
export class ParentDashBoardPagePage implements OnInit {

  constructor(private _router:Router,private _ser:LoginServicesService) { }
  //user_id:string=localStorage.getItem('user_id');
  stu_arr:Student[];
  name:string;
  class:number;
  div:string;
  rollno:number;
 // path:string=localStorage.getItem('img_path');
  ngOnInit() {

    // this._ser.getstudent().subscribe(
    //   (data:Student[])=>{
    //     console.log(data);
    //   }
    // );

  
  }

  onHomeWork(){
   this._router.navigate(['/home-work']);
  
  }

  onLeave(){
    this._router.navigate(['/leave']);
  }

  onMyprofile(){
    this._router.navigate(['/profile-page']);
  }
  onNotes(){
    this._router.navigate(['/notes']);
  }
  onNotice(){
    this._router.navigate(['/notice']);
  }
  onAttendance(){
    this._router.navigate(['/attendance']);
  }
  onRemark(){
    this._router.navigate(['/display-remark']);
  }
  onSyllabus(){
    this._router.navigate(['/']);
  }
  onExamresult(){
    this._router.navigate(['/exam-result']);
  }
  onHoliday()
  {
    this._router.navigate(['/holidays']);
  }
  onnotice()
  {
    this._router.navigate(['/notice']);
  }
  onTimetable(){
    this._router.navigate(['/student-timetable']);
  }
  onPastpapers(){
    this._router.navigate(['/past-papers']);
  }
  onPhotoGallery(){
    this._router.navigate(['/photo-gallery']);
  }
  onTeacherInteraction(){
    this._router.navigate(['/parent-interaction']);
  }
  onMyleave(){
    this._router.navigate(['/leave']);
  }
  onLeaveDisplay()
  {
    this._router.navigate(['/student-leave-display']);
  }
  onLocation(){
    this._router.navigate(['/homework']);
  }
  onChat()
  {
    this._router.navigate(['/parent-chat-display']);
  }

}
