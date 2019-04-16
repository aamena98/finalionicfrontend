import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParentChatDisplayPage } from './parent-chat-display.page';

const routes: Routes = [
  {
    path: '',
    component: ParentChatDisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParentChatDisplayPage]
})
export class ParentChatDisplayPageModule {}
