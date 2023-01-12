import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { HttpService } from './core/http/http.service';
import { ViewDealComponent } from './components/top-deals/view-deal/view-deal.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';
import { LoginModule } from './login/login.module';
import { CartModule } from './cart/cart/cart.module';
import { TalkToDoctorModule } from './talk-to-doctor/talk-to-doctor.module';

;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    MedicineComponent,
    TopDealsComponent,
    ViewDealComponent,
    ViewProductDetailsCategoryComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    CartModule,
    TalkToDoctorModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
