import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogementDetailPageRoutingModule } from './logement-detail-routing.module';

import { LogementDetailPage } from './logement-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogementDetailPageRoutingModule
  ],
  declarations: [LogementDetailPage]
})
export class LogementDetailPageModule {}
