import { Component, OnInit } from '@angular/core';

import { Logement } from '../logement.model';
import { LogementsService } from '../logements.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.page.html',
  styleUrls: ['./offres.page.scss'],
})
export class OffresPage implements OnInit {

  loadedOffres: Logement[];

  constructor( private logementsService: LogementsService) { }

  ngOnInit() {
    this.loadedOffres = this.logementsService.logements;
  }

}
