import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPeitoPage } from './dados-peito.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPeitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPeitoPageRoutingModule {}
