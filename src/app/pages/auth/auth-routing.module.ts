import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'signin',
        loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
      },
      {
        path: 'signup-client',
        loadChildren: () => import('./signup-client/signup-client.module').then( m => m.SignupClientPageModule)
      },
      {
        path: 'signup-therapist',
        loadChildren: () => import('./signup-therapist/signup-therapist.module').then( m => m.SignupTherapistPageModule)
      },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
