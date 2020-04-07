import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   text: string = "Le texte par defaut";

  constructor() {}

  onChangeText(){
    this.text = "Steven seagal est une quiche";
  }
  
}
