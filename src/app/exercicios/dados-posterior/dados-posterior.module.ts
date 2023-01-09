import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPosteriorPageRoutingModule } from './dados-posterior-routing.module';

import { DadosPosteriorPage } from './dados-posterior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPosteriorPageRoutingModule
  ],
  declarations: [DadosPosteriorPage]
})
export class DadosPosteriorPageModule {}
