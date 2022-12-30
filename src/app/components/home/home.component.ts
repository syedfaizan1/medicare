import { Component, OnInit } from '@angular/core';
import { insuranceeObj } from 'src/app/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
insuranceArr:insuranceeObj[]=[{heading:'E-Card',
body:'Get e-cards for you and your family members',
img:'https://previews.123rf.com/images/stockgiu/stockgiu1703/stockgiu170302783/77144731-figure-hospital-prescription-pad-icon.jpg'
},{heading:'E-Card',
body:'Get e-cards for you and your family members',
img:'https://previews.123rf.com/images/stockgiu/stockgiu1703/stockgiu170302783/77144731-figure-hospital-prescription-pad-icon.jpg'
},{heading:'Claims',

body:'Track your claims in real-time',
img:'https://previews.123rf.com/images/stockgiu/stockgiu1703/stockgiu170302783/77144731-figure-hospital-prescription-pad-icon.jpg'
}]
  constructor() { }

  ngOnInit(): void {
  }

}
