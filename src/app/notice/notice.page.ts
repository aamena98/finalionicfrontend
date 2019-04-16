import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  hidenotice:boolean=true;
  hidec:boolean=false;
  constructor() { }

  ngOnInit() {
  
  }
  hidecircular() { this.hidec = true;this.hidenotice=false; } 
  shownotice() { this.hidenotice = true;this.hidec=false; }
}
