import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk-to-doctor',
  templateUrl: './talk-to-doctor.component.html',
  styleUrls: ['./talk-to-doctor.component.scss']
})
export class TalkToDoctorComponent implements OnInit {
  toggle:string='data-bs-toggle'
  constructor() { }

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

// _________FaQArr________________

Faqarr:FAQ[]=[
{que:'What can I use this app for?' , ans:{desc:'MediBuddy is the best app for over 70% of your health concerns!',points:['Chat with 5+Years experienced MD & MBBS certified doctors, Nutritionists, Sexual health advisor, Clinical Psychologist etc. You can also consult over voice calls,attach images of your affected area, prescription and reports.','Read health tips and remedies recommended by specialist doctors from top cities','Book Lab tests for Home Collection @ discounted prices (up to 20% off , offered in selected cities only)','Order medicines to be delivered at home @ discounted prices (upto15% off, offered in selected cities only)']}},
{que:'How much does it cost?' , ans:{points:['The consultation is cashless if you are availing corporate sponsored benefit',
"Our consultation fees are much more reasonable than clinic rates. You can save up to 60% by consulting Indias top doctors through DocsApp. Adding the savings of NOT travelling in traffic and waiting for appointments, DocsApp is a deal you cannot resist"]}},
{que:'' , ans:{}},
{que:'' , ans:{}},
{que:'' , ans:{}},
{que:'' , ans:{}},
{que:'' , ans:{}},
{que:'' , ans:{}},
{que:'' , ans:{}},
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
