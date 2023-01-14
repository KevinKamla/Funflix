import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'video-detail',
    loadChildren: () => import('../views/video-detail/video-detail.module').then( m => m.VideoDetailPageModule)
  },
  {
    path: 'all',
    loadChildren: () => import('../views/all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('../views/tv/tv.module').then( m => m.TvPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('../views/movies/movies.module').then( m => m.MoviesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
