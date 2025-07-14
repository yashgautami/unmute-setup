import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindTherapistPage } from './find-therapist.page';

const routes: Routes = [
  {
    path: '',
    component: FindTherapistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindTherapistPageRoutingModule {}
