import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldSectionRoutingModule } from './gold-section-routing.module';
import { GoldCompComponent } from './gold-comp/gold-comp.component';


@NgModule({
  declarations: [
    GoldCompComponent
  ],
  imports: [
    CommonModule,
    GoldSectionRoutingModule
  ]
})
export class GoldSectionModule { }
