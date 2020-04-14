import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOffrePage } from './new-offre.page';

const routes: Routes = [
  {
    path: '',
    component: NewOffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOffrePageRoutingModule {}
