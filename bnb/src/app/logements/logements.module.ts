import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogementsPageRoutingModule } from './logements-routing.module';

import { LogementsPage } from './logements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogementsPageRoutingModule
  ],
  declarations: [LogementsPage]
})
export class LogementsPageModule {}
