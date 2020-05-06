import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule implements OnInit {

  isAuth: boolean;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut(){
    this.authservice.signOutUser();
  }

}
