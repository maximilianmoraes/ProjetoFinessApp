import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosTricepsPage } from './dados-triceps.page';

const routes: Routes = [
  {
    path: '',
    component: DadosTricepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosTricepsPageRoutingModule {}
