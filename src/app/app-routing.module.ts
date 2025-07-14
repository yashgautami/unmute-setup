import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'therapist',
    loadChildren: () => import('./pages/therapist/therapist.module').then( m => m.TherapistPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
