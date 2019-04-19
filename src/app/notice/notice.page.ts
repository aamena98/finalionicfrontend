import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  hidenotice:boolean=true;
  hidec:boolean=false;
  constructor(private _route:Router) { }

  ngOnInit() {
  
  }
  onback()
{
    this._route.navigate(['/parent-dash-board-page']);
}

  hidecircular() { this.hidec = true;this.hidenotice=false; } 
  shownotice() { this.hidenotice = true;this.hidec=false; }
}
