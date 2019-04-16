import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//import {MatInputModule,MatIconModule,MatTableModule,MatFormFieldModule,MatButtonModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



import { IonicModule } from '@ionic/angular';

import { LoginPagePage } from './login-page.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPagePage]
})
export class LoginPagePageModule {}
