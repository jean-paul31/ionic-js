import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffreBookingsPageRoutingModule } from './offre-bookings-routing.module';

import { OffreBookingsPage } from './offre-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffreBookingsPageRoutingModule
  ],
  declarations: [OffreBookingsPage]
})
export class OffreBookingsPageModule {}
