import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-view-deal',
  templateUrl: './view-deal.component.html',
  styleUrls: ['./view-deal.component.scss']
})
export class ViewDealComponent implements OnInit {
drugId:string | null 
drugArr:any=[]
drugObj:any ={}
  constructor( private Aroute:ActivatedRoute , private svc:HttpService,private cart:CartService) { }

  ngOnInit(): void {
    this.Aroute.paramMap.subscribe((param)=>{
 this.drugId = param.get('id');
    })

    this.svc.getTOpDealsFormServer('topDeals').subscribe((data)=>{
       
      this.drugArr =data
      console.log(this.drugArr);
  this.drugArr.find(el=>{
// console.log(el);
// console.log(el.drugCode);


 if(el.drugCode == this.drugId){
  // console.log(el);
   
  this.drugObj = el
  console.log(this.drugObj);
 
  }


 
 
      })
      
      

      
    })
  }
  
  addToCart(product:any){
    this.cart.addSelectItemToCart(product);
   
   }


}
