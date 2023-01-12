import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { TalkToDoctorComponent } from 'src/app/talk-to-doctor/talk-to-doctor.component';

@Component({
  selector: 'app-gold-comp',
  templateUrl: './gold-comp.component.html',
  styleUrls: ['./gold-comp.component.scss']
})
export class GoldCompComponent implements OnInit {

  constructor( private http:HttpService) { }
 
  reviewArr:Review[]=[ {name:'Alok P****',desc:'u discuss your health problems with highly Experienced doctors over phone. They listens to ur problems and prescribe medicines accordingly. Its like doctors visiting home.'},
 {name:'Anoop S****',desc:'This is useful app which i got immediate solution of my problem. Doctor contact just after few minute of payment and share medicine prescription. Good service..'},
 {name:'Anoop S****',desc:'This is useful app which i got immediate solution of my problem. Doctor contact just after few minute of payment and share medicine prescription. Good service..'},
{name:'Alok P****',desc:'u discuss your health problems with highly Experienced doctors over phone. They listens to ur problems and prescribe medicines accordingly. Its like doctors visiting home.'},

  { name:'praneeth D*****', desc:"Kafi accha app h. The consultation charges are cheap compared to hospitals. I'm Really happy with the overall process. I recommend it to everyone"
  },
  { name:'Lincy D*****', desc:"Helpful for people who need assistance on health and convenience in chat and phone. Appreciate this Idea"
  },
  { name:'Ishan D*****', desc:"Very awsm app... Got my problem solved within minutes... And nice & prompt consultation"
  },
  { name:'Sakshi S*****', desc:"Just loved the experience. The doctors give proper time to listen to problems. Best in this regard."
  },
  { name:'praneeth D*****', desc:"Kafi accha app h. The consultation charges are cheap compared to hospitals. I'm Really happy with the overall process. I recommend it to everyone"
  },
]

goldArr:gold[]=[
  {validity:' 1 Year',price:'1500/-'},
  {validity:' 6 Months',price:'1200/-'},
  {validity:' 3 Months',price:'1000/-'},
  {validity:' 1 Months',price:'900/-'},
]




  ngOnInit(): void {
  }

}

 class Review{
  name:string
  desc:string 
 } 

 class FAQ {
  que:string
  ans:ansObj
 }

 class ansObj{
  desc?:string
  points?:string[]
 }

 class gold {
  validity:string
  price:string
 }
