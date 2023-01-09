import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosOmbroPageRoutingModule } from './dados-ombro-routing.module';

import { DadosOmbroPage } from './dados-ombro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosOmbroPageRoutingModule
  ],
  declarations: [DadosOmbroPage]
})
export class DadosOmbroPageModule {}
