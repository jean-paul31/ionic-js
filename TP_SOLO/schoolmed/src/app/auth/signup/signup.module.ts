import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';


const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class SignupModule { }
