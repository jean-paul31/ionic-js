import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LogementsPage } from './logements.page';
import { LogementsRoutingModule } from './logements-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LogementsRoutingModule
  ],
  declarations: [LogementsPage]
})
export class LogementsPageModule {}
