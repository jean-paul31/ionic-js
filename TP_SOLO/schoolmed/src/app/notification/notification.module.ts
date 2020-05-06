import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { notificationPage } from './notification.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { notificationPageRoutingModule } from './notification-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: notificationPage }]),
    notificationPageRoutingModule,
  ],
  declarations: [notificationPage]
})
export class notificationPageModule {}
