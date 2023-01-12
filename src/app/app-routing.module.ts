import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { ViewDealComponent } from './components/top-deals/view-deal/view-deal.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';
import { CartComponent } from './cart/cart/cart.component';
import { BookingDetailsComponent } from './cart/cart/booking-details/booking-details.component';
import { ConfirmOrderComponent } from './cart/cart/confirm-order/confirm-order.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'view',component:ViewDealComponent},
  {path:'view/:id',component:ViewDealComponent},
  {path:'cart',component:CartComponent},
  {path:'view-top-details-by-category',component:ViewProductDetailsCategoryComponent},
  {path:'booking-details',component:BookingDetailsComponent},
  {path:'confirm-order' , component:ConfirmOrderComponent},
  {
    path: 'talk-to-doctor',
    loadChildren: () => import('./talk-to-doctor/talk-to-doctor.module').then(m => m.TalkToDoctorModule)
  },
  {
    path: 'gold-membership',
    loadChildren: () => import('./gold-section/gold-section.module').then(m => m.GoldSectionModule)
  },

  {path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
