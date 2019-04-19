import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
    localStorage.setItem('user_id','');
    localStorage.setItem('user_type','');
    localStorage.setItem('class','');
    localStorage.setItem('img_path','');
    localStorage.setItem('div','');
  }
  onlogin()
  {
this._route.navigate(['/login-page']);
  }
}
