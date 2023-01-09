import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadricepsPage } from './quadriceps.page';

const routes: Routes = [
  {
    path: '',
    component: QuadricepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuadricepsPageRoutingModule {}
