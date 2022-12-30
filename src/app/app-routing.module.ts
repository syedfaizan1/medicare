import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MedicineComponent } from './components/medicine/medicine.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
