import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notificationPage } from './notification.page';

const routes: Routes = [
  {
    path: '',
    component: notificationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class notificationPageRoutingModule {}
