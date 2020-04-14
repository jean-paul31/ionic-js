import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogementDetailPage } from './logement-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LogementDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogementDetailPageRoutingModule {}
