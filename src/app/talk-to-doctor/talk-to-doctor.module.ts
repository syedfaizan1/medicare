import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalkToDoctorRoutingModule } from './talk-to-doctor-routing.module';
import { TalkToDoctorComponent } from '../talk-to-doctor/talk-to-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalkToDoctorFormComponent } from '../talk-to-doctor-form/talk-to-doctor-form.component';


@NgModule({
  declarations: [
    TalkToDoctorComponent,
    TalkToDoctorFormComponent
  ],
  imports: [
    CommonModule,
    TalkToDoctorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TalkToDoctorModule { }
