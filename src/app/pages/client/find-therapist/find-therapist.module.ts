import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindTherapistPageRoutingModule } from './find-therapist-routing.module';
import { FindTherapistPage } from './find-therapist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindTherapistPageRoutingModule
  ],
  declarations: [FindTherapistPage]
})
export class FindTherapistPageModule {}
