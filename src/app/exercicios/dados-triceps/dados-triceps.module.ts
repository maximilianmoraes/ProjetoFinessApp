import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosTricepsPageRoutingModule } from './dados-triceps-routing.module';

import { DadosTricepsPage } from './dados-triceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosTricepsPageRoutingModule
  ],
  declarations: [DadosTricepsPage]
})
export class DadosTricepsPageModule {}
