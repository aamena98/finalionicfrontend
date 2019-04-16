import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeacherDashboarfPage } from './teacher-dashboarf.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboarfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeacherDashboarfPage]
})
export class TeacherDashboarfPageModule {}
