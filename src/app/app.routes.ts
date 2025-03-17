import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'example1',
    loadComponent: () => import('./components/example-01/example-01.component'),
  },
  {
    path: 'example2',
    loadComponent: () => import('./components/example-02/example-02.component'),
  }
];
