import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosBicepsPageRoutingModule } from './dados-biceps-routing.module';

import { DadosBicepsPage } from './dados-biceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosBicepsPageRoutingModule
  ],
  declarations: [DadosBicepsPage]
})
export class DadosBicepsPageModule {}
