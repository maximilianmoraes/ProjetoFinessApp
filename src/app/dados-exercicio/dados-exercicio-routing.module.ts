import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosExercicioPage } from './dados-exercicio.page';

const routes: Routes = [
  {
    path: '',
    component: DadosExercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosExercicioPageRoutingModule {}
