import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupTherapistPage } from './signup-therapist.page';

const routes: Routes = [
  {
    path: '',
    component: SignupTherapistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupTherapistPageRoutingModule {}
