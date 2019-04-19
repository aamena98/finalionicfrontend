import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentLeaveDisplayPage } from './student-leave-display.page';

const routes: Routes = [
  {
    path: '',
    component: StudentLeaveDisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentLeaveDisplayPage]
})
export class StudentLeaveDisplayPageModule {}
