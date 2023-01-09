import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmbroPageRoutingModule } from './ombro-routing.module';

import { OmbroPage } from './ombro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmbroPageRoutingModule
  ],
  declarations: [OmbroPage]
})
export class OmbroPageModule {}
