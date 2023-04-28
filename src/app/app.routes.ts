import { Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/view/view.module').then(m => m.ViewModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];