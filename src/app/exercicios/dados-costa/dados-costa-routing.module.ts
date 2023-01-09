import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosCostaPage } from './dados-costa.page';

const routes: Routes = [
  {
    path: '',
    component: DadosCostaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosCostaPageRoutingModule {}
