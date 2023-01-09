import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosCostaPageRoutingModule } from './dados-costa-routing.module';

import { DadosCostaPage } from './dados-costa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosCostaPageRoutingModule
  ],
  declarations: [DadosCostaPage]
})
export class DadosCostaPageModule {}
