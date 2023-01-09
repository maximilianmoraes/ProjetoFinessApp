import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPeitoPageRoutingModule } from './dados-peito-routing.module';

import { DadosPeitoPage } from './dados-peito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPeitoPageRoutingModule
  ],
  declarations: [DadosPeitoPage]
})
export class DadosPeitoPageModule {}
