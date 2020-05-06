import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    ) {
     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAT85ADMAtRYrQ_M4rBmc3t8TLBAMDZRcw",
    authDomain: "tpionic-b210f.firebaseapp.com",
    databaseURL: "https://tpionic-b210f.firebaseio.com",
    projectId: "tpionic-b210f",
    storageBucket: "tpionic-b210f.appspot.com",
    messagingSenderId: "107583769107",
    appId: "1:107583769107:web:88387b1e9ae4df8654cde6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
