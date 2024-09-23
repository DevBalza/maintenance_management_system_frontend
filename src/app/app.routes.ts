import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./domain/dashboard/dashboard.component'),
      },

      {
        path: 'profile',
        loadComponent: () => import('./domain/profile/profile.component'),
      },

      {
        path: 'table',
        loadComponent: () => import('./domain/table/table.component'),
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
