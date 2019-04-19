import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.page.html',
  styleUrls: ['./holidays.page.scss'],
})
export class HolidaysPage implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  onback()
  {
      this._route.navigate(['/parent-dash-board-page']);
  }
  
}
