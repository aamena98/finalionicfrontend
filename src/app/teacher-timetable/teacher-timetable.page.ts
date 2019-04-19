import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-teacher-timetable',
  templateUrl: './teacher-timetable.page.html',
  styleUrls: ['./teacher-timetable.page.scss'],
})
export class TeacherTimetablePage implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  onback()
{
    this._route.navigate(['/teacher-dashboarf']);
}


}
