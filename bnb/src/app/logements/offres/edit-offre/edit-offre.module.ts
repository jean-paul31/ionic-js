import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditOffrePageRoutingModule } from './edit-offre-routing.module';

import { EditOffrePage } from './edit-offre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditOffrePageRoutingModule
  ],
  declarations: [EditOffrePage]
})
export class EditOffrePageModule {}
