import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogementsPage } from './logements.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LogementsPage,
    children:[
      {
        path: 'discover',

         children: [
          {
            path:'',
            loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
          },
          {
            path:':logementId',
            loadChildren: () => import('./discover/logement-detail/logement-detail.module').then( m => m.LogementDetailPageModule)
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
            loadChildren: () => import('./offres/new-offre/new-offre.module').then(m => m.NewOffrePageModule)
          },
          {
            path: 'edit/:logementId',
            loadChildren: () => import('./offres/edit-offre/edit-offre.module').then(m => m.EditOffrePageModule)
          },
          {
            path: ':logementId',
            loadChildren: () => import('./offres/offre-bookings/offre-bookings.module').then(m => m.OffreBookingsPageModule)
          }
        ]
      },

    ]
  },
   { path: '', redirectTo: '/logements/tabs/discover', pathMatch: 'full' },
   { path: '', redirectTo: '/logements/tabs/discover', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogementsPageRoutingModule {}