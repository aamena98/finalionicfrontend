import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddRemarkDescPage } from './add-remark-desc.page';

const routes: Routes = [
  {
    path: '',
    component: AddRemarkDescPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddRemarkDescPage]
})
export class AddRemarkDescPageModule {}
