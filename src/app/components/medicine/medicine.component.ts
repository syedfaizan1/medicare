import { ViewportScroller } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  pincode:string=""
  isPinCodeAvailable: boolean =false;
  pincodeDetails:any
  constructor ( private  http:HttpService,private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  getPackageDetailsByPincode(){

    if(this.pincode && this.pincode.length == 6){
    const httpParams:HttpParams = new HttpParams().set('pincode',this.pincode);
this.http.getDetailsFromServer('pincodeDetails',httpParams).subscribe((response:any)=>{
if(response && response.length > 0){
  this.isPinCodeAvailable =true
  console.log(response);
  
  this.pincodeDetails= response[0]
}else{
  this.isPinCodeAvailable =false
}
},
error=>{
  console.log(error)
})
}
  }

SearchTextEnterd:string=''

 OnSearchEnter(){
 console.log(this.SearchTextEnterd);
 
 }
 public onClick(elementId: string): void { 
  this.viewportScroller.scrollToAnchor(elementId);
}

}
