import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosBicepsPage } from './dados-biceps.page';

const routes: Routes = [
  {
    path: '',
    component: DadosBicepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosBicepsPageRoutingModule {}
