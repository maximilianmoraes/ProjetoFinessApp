import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosteriorPage } from './posterior.page';

const routes: Routes = [
  {
    path: '',
    component: PosteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosteriorPageRoutingModule {}
