import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosQuadricepsPageRoutingModule } from './dados-quadriceps-routing.module';

import { DadosQuadricepsPage } from './dados-quadriceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosQuadricepsPageRoutingModule
  ],
  declarations: [DadosQuadricepsPage]
})
export class DadosQuadricepsPageModule {}
