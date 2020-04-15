import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Logement } from '../../logement.model';
import { ActivatedRoute } from '@angular/router';
import { LogementsService } from '../../logements.service';

@Component({
  selector: 'app-offre-bookings',
  templateUrl: './offre-bookings.page.html',
  styleUrls: ['./offre-bookings.page.scss'],
})
export class OffreBookingsPage implements OnInit {

  logement: Logement;

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private logementsService: LogementsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('logementId')) {
        this.navCtrl.navigateBack('/logements/tabs/offres');
        return;
      }
      this.logement = this.logementsService.getLogement(paramMap.get('logementId'));
    })
  }
  onBookoffres(){
    this.navCtrl.navigateBack('/logements/tabs/offres/new ');
  }

}
