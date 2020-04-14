import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogementsPage } from './logements.page';

const routes: Routes = [
  {
    path: '',
    component: LogementsPage
  },
  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'offres',
    loadChildren: () => import('./offres/offres.module').then( m => m.OffresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogementsPageRoutingModule {}
