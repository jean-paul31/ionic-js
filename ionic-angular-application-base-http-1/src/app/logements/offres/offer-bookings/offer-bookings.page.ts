import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { Logement } from '../../logement.model';
import { LogementsService } from '../../logements.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss']
})
export class OfferBookingsPage implements OnInit, OnDestroy {
  logement: Logement;
  private logementSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private logementsService: LogementsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('logementId')) {
        this.navCtrl.navigateBack('/logements/tabs/offres');
        return;
      }
      this.logementSub = this.logementsService
        .getLogement(paramMap.get('logementId'))
        .subscribe(logement => {
          this.logement = logement;
        });
    });
  }

  ngOnDestroy() {
    if (this.logementSub) {
      this.logementSub.unsubscribe();
    }
  }
}
