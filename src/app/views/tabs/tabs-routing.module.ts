import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../../views/search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'download',
        loadChildren: () => import('../../views/download/download.module').then( m => m.DownloadPageModule)
      },
      {
        path: 'all',
        loadChildren: () => import('../../views/all/all.module').then( m => m.AllPageModule)
      },
      {
        path: 'tv',
        loadChildren: () => import('../../views/tv/tv.module').then( m => m.TvPageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('../../views/movies/movies.module').then( m => m.MoviesPageModule)
      },
      {
        path: 'mylist',
        loadChildren: () => import('../../views/mylist/mylist.module').then( m => m.MylistPageModule)
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
