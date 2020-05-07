import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from "firebase";


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
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
