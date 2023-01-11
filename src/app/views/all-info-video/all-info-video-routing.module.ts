import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllInfoVideoPage } from './all-info-video.page';

const routes: Routes = [
  {
    path: '',
    component: AllInfoVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllInfoVideoPageRoutingModule {}
