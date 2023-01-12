import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';


@NgModule({
  
  declarations: [
    CartComponent,
    BookingDetailsComponent,
    ConfirmOrderComponent,

    
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
    
  ]
})
export class CartModule { }
