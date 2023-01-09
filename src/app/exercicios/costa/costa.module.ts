import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostaPageRoutingModule } from './costa-routing.module';

import { CostaPage } from './costa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostaPageRoutingModule
  ],
  declarations: [CostaPage]
})
export class CostaPageModule {}
