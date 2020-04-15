import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logement-detail',
  templateUrl: './logement-detail.page.html',
  styleUrls: ['./logement-detail.page.scss'],
})
export class LogementDetailPage implements OnInit {

  constructor(private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
  }
  onBookLogement(){
    // this.router.navigateByUrl('/logements/tabs/discover');
    // this.navCtrl.navigateBack('/logements/tabs/discover');
    this.navCtrl.pop();
  }

}
