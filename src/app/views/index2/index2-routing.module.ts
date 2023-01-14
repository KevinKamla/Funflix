import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index2Page } from './index2.page';

const routes: Routes = [
  {
    path: '',
    component: Index2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Index2PageRoutingModule {}
