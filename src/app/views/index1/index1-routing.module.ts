import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index1Page } from './index1.page';

const routes: Routes = [
  {
    path: '',
    component: Index1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Index1PageRoutingModule {}
