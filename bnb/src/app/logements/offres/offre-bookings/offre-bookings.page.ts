import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offre-bookings',
  templateUrl: './offre-bookings.page.html',
  styleUrls: ['./offre-bookings.page.scss'],
})
export class OffreBookingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  onBookoffres(){
    this.navCtrl.pop();
  }

}
