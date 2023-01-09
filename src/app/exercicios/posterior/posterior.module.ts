import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosteriorPageRoutingModule } from './posterior-routing.module';

import { PosteriorPage } from './posterior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosteriorPageRoutingModule
  ],
  declarations: [PosteriorPage]
})
export class PosteriorPageModule {}
