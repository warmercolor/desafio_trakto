import { Routes } from "@angular/router";

export const AppRoutes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/homepage/homepage.module').then(x => x.HomepageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
]