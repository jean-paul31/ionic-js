import { Component, OnInit } from '@angular/core';
import { LogementsService } from '../logements.service';
import { Logement } from '../logement.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedLogements: Logement[];

  constructor(private logementsService: LogementsService) { }

  ngOnInit() {
    this.loadedLogements = this.logementsService.logements;
  }

}
