import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MbscModule } from '@mobiscroll/angular';
//import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDemoPage } from './my-demo.page';

const routes: Routes = [
  {
    path: '',
    component: MyDemoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MbscModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyDemoPage]
})
export class MyDemoPageModule {}
