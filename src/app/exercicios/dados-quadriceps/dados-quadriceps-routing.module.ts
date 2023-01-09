import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosQuadricepsPage } from './dados-quadriceps.page';

const routes: Routes = [
  {
    path: '',
    component: DadosQuadricepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosQuadricepsPageRoutingModule {}
