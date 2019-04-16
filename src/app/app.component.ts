import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginServicesService } from "./Services/login-services.service";
import { Student } from '../Classes/student'
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  constructor(
  
  ) {
  }
  ngOnInit() {
  }
  
}
