import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LogementsService } from '../logements.service';
import { Logement } from '../logement.model';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss']
})
export class OffresPage implements OnInit, OnDestroy {
  offres: Logement[];
  private logementsSub: Subscription;
  isLoading = false;

  constructor(private logementsService: LogementsService, private router: Router) {}

  ngOnInit() {
    this.logementsSub = this.logementsService.logements.subscribe(logements => {
      this.offres = logements;
    });
  }

  ionViewWillEnter(){
    this.isLoading = true;
    this.logementsService.fetchLogements().subscribe(()=>{
      this.isLoading = false;    });
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'logements', 'tabs', 'offres', 'edit', offerId]);
    console.log('Editing item', offerId);
  }

  ngOnDestroy() {
    if (this.logementsSub) {
      this.logementsSub.unsubscribe();
    }
  }
}
