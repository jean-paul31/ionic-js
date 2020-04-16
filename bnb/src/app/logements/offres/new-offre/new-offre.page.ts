import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offre',
  templateUrl: './new-offre.page.html',
  styleUrls: ['./new-offre.page.scss'],
})
export class NewOffrePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onCreateOffre(){
    console.log("offre crée");
    
  }

}
