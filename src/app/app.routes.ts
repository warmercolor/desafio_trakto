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
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(x => x.DashboardModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
]