import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosCardioPageRoutingModule } from './dados-cardio-routing.module';

import { DadosCardioPage } from './dados-cardio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosCardioPageRoutingModule
  ],
  declarations: [DadosCardioPage]
})
export class DadosCardioPageModule {}
