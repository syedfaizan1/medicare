import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldCompComponent } from './gold-comp/gold-comp.component';

const routes: Routes = [
  {
    path:'',component:GoldCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldSectionRoutingModule { }
