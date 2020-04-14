import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffreBookingsPage } from './offre-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: OffreBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffreBookingsPageRoutingModule {}
