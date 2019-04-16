import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentReplyPagePage } from './student-reply-page.page';

const routes: Routes = [
  {
    path: '',
    component: StudentReplyPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentReplyPagePage]
})
export class StudentReplyPagePageModule {}
