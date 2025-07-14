import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapistPage } from './therapist.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'availability',
        loadChildren: () => import('./availability/availability.module').then( m => m.AvailabilityPageModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'earnings',
        loadChildren: () => import('./earnings/earnings.module').then( m => m.EarningsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapistPageRoutingModule {}
