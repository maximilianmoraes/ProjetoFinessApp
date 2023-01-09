import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostaPage } from './costa.page';

const routes: Routes = [
  {
    path: '',
    component: CostaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostaPageRoutingModule {}
