import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkToDoctorComponent } from './talk-to-doctor.component';
import { TalkToDoctorFormComponent } from '../talk-to-doctor-form/talk-to-doctor-form.component';

const routes: Routes = [
  {path:'',component:TalkToDoctorComponent},
  {path:'request-call',component:TalkToDoctorFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalkToDoctorRoutingModule { }
