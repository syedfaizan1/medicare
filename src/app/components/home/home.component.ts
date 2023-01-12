import { ViewportScroller } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';

import { insuranceeObj } from 'src/app/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,DoCheck {
  


insuranceArr:insuranceeObj[]=[{heading:'E-Card',
body:'Get e-cards for you and your family members',
img:'https://www.medibuddy.in/assets/services/insurance/ecard.svg'
},{heading:'Claims',

body:'Track your claims in real-time lorem ipsum dolor ',
img:'https://www.medibuddy.in/assets/services/insurance/claims.svg'
},{heading:'Plan Hospitalization',
body:'Plan and Intimate hospitalization at trusted hospitals',
img:'https://www.medibuddy.in/assets/services/insurance/hospitalization.svg'
},{heading:'Network Hospitals',
body:'Search for the nearest Network hospital to go cashless',
img:'https://www.medibuddy.in/assets/services/insurance/network-hospitals.svg'
},{heading:'Empanel Hospitals',
body:'Become a part of Network Hospital',
img:'https://www.medibuddy.in/assets/services/insurance/EmpanelHosp.svg',
link:'https://mediassisttpa.in/hospital.html#empanelHospital'
}]
  constructor(private viewportScroller: ViewportScroller) { }
  ngDoCheck() {

  }

  ngOnInit(): void {

  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

disabledflg:boolean=false
  onDisableClick(){
    this.disabledflg=true
  }
  closeAlert(){
    this.disabledflg=false
  }
  
  

}
