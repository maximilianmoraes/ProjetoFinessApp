import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosExercicioPageRoutingModule } from './dados-exercicio-routing.module';

import { DadosExercicioPage } from './dados-exercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosExercicioPageRoutingModule
  ],
  declarations: [DadosExercicioPage]
})
export class DadosExercicioPageModule {}
