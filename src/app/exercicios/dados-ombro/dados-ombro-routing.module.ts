import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosOmbroPage } from './dados-ombro.page';

const routes: Routes = [
  {
    path: '',
    component: DadosOmbroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosOmbroPageRoutingModule {}
