import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'video-detail',
    loadChildren: () => import('./views/video-detail/video-detail.module').then( m => m.VideoDetailPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./views/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./views/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./views/play/play.module').then( m => m.PlayPageModule)
  },
  {
    path: 'all-info-video',
    loadChildren: () => import('./views/all-info-video/all-info-video.module').then( m => m.AllInfoVideoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
