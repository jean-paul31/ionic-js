import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';

import { LogementsService } from '../logements.service';
import { Logement } from '../logement.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedLogements: Logement[];
  listedLoadedLogements: Logement[];
  relevantLogements: Logement[];
  private logementsSub: Subscription;

  constructor(
    private logementsService: LogementsService,
    private menuCtrl: MenuController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.logementsSub = this.logementsService.logements.subscribe(logements => {
      this.loadedLogements = logements;
      this.relevantLogements = this.loadedLogements;
      this.listedLoadedLogements = this.relevantLogements.slice(1);
    });
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'all') {
      this.relevantLogements = this.loadedLogements;
      this.listedLoadedLogements = this.relevantLogements.slice(1);
    } else {
      this.relevantLogements = this.loadedLogements.filter(
        logement => logement.userId !== this.authService.userId
      );
      this.listedLoadedLogements = this.relevantLogements.slice(1);
    }
  }

  ngOnDestroy() {
    if (this.logementsSub) {
      this.logementsSub.unsubscribe();
    }
  }
}
