import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditOffrePage } from './edit-offre.page';

const routes: Routes = [
  {
    path: '',
    component: EditOffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOffrePageRoutingModule {}
