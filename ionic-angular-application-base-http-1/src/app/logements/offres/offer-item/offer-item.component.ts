import { Component, OnInit, Input } from '@angular/core';

import { Logement } from '../../logement.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {
  @Input() offer: Logement;

  constructor() { }

  ngOnInit() {
  }
}
