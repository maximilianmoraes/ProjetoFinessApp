import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmbroPage } from './ombro.page';

const routes: Routes = [
  {
    path: '',
    component: OmbroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmbroPageRoutingModule {}
