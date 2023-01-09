import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPosteriorPage } from './dados-posterior.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPosteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPosteriorPageRoutingModule {}
