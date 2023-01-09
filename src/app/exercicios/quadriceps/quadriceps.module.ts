import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuadricepsPageRoutingModule } from './quadriceps-routing.module';

import { QuadricepsPage } from './quadriceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuadricepsPageRoutingModule
  ],
  declarations: [QuadricepsPage]
})
export class QuadricepsPageModule {}
