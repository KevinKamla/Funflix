import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetailPage } from './video-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VideoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoDetailPageRoutingModule {}
