import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'find-therapist',
        loadChildren: () => import('./find-therapist/find-therapist.module').then( m => m.FindTherapistPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'session-history',
        loadChildren: () => import('./session-history/session-history.module').then( m => m.SessionHistoryPageModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('./pricing/pricing.module').then( m => m.PricingPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
