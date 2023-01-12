import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit{
  topDeals:any=[]
  constructor(private svc:HttpService,private cart:CartService,private shared:SharedService) { }
 

  ngOnInit(): void {
    this.svc.getTOpDealsFormServer('topDeals').subscribe((deals)=>{
       this.topDeals=deals
    })

    console.log(this.searchTextRecived);
    
  
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  addToCart(product:any){
    this.cart.addSelectItemToCart(product);
   
   }

 @Input()searchTextRecived:string

 onSerchTextRecive(){
  // this.topDeals.forEach(deal => {
  //   if( deal.medicineName !=='' && deal.medicineName.includes(this.searchTextRecived)){
  //     let searchedDeal =deal
  //     console.log(searchedDeal);
      
  //   }
    
  // });
  // this.topDeals.filter((deal:any)=>{
  //   if( deal.medicineName !=='' && deal.medicineName.includes(this?.searchTextRecived)){
  //     console.log(deal);
      
  //   }

  // })
 }
 
  

}
