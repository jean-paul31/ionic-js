import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogementsPage } from './logements.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LogementsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
          },
          {
            path: ':logementId',
            loadChildren: () => import('./discover/logement-detail/logement-detail.module').then(m => m.LogementDetailPageModule)
          }
        ]
      },
      {
        path: 'offres',
        children: [
          {
            path: '',
            loadChildren: () => import('./offres/offres.module').then(m => m.OffresPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./offres/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
          },
          {
            path: 'edit/:logementId',
            loadChildren: () => import('./offres/edit-offer/edit-offer.module').then(m => m.EditOfferPageModule)
          },
          {
            path: ':logementId',
            loadChildren: () => import('./offres/offer-bookings/offer-bookings.module').then(m => m.OfferBookingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/logements/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/logements/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogementsRoutingModule {}
