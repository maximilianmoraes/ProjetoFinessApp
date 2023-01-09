import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosCardioPage } from './dados-cardio.page';

const routes: Routes = [
  {
    path: '',
    component: DadosCardioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosCardioPageRoutingModule {}
