import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffresPage } from './offres.page';

const routes: Routes = [
  {
    path: '',
    component: OffresPage
  },
  {
    path: 'offre-bookings',
    loadChildren: () => import('./offre-bookings/offre-bookings.module').then( m => m.OffreBookingsPageModule)
  },
  {
    path: 'new-offre',
    loadChildren: () => import('./new-offre/new-offre.module').then( m => m.NewOffrePageModule)
  },
  {
    path: 'edit-offre',
    loadChildren: () => import('./edit-offre/edit-offre.module').then( m => m.EditOffrePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffresPageRoutingModule {}
