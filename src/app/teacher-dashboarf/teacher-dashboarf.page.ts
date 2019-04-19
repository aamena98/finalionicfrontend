import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-teacher-dashboarf',
  templateUrl: './teacher-dashboarf.page.html',
  styleUrls: ['./teacher-dashboarf.page.scss'],
})
export class TeacherDashboarfPage implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  ondashoBoard()
  {
    this._route.navigate(['/teacher-profile']);
  }
  onattendance()
  {
    this._route.navigate(['/take-attendance']);
  }
  onremark()
  {
    this._route.navigate(['/add-remark']);
  }

  onsyllabus()
  {
    this._route.navigate(['/photo-gallery']);
  }

  onNotice()
{
  this._route.navigate(['/notice']);
}

  ontimetable()
{
  this._route.navigate(['/teacher-timetable']);
}
  onhw()
{
  this._route.navigate(['/add-homework']);
}

  onholiday()
{
  this._route.navigate(['/holidays']);
}

  onparentinteraction()
{
  this._route.navigate(['/teacher-interaction']);
}

  onleave()
  {
    this._route.navigate(['/leave-display']);
  }
}
