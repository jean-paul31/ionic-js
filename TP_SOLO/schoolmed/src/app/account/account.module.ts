import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { accountPage } from './account.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { accountPageRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    accountPageRoutingModule
  ],
  declarations: [accountPage]
})
export class accountPageModule {}
