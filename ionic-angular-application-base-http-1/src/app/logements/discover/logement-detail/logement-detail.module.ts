import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogementDetailPage } from './logement-detail.page';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

const routes: Routes = [
  {
    path: '',
    component: LogementDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogementDetailPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent]
})
export class LogementDetailPageModule {}
