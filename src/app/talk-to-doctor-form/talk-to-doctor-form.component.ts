import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-talk-to-doctor-form',
  templateUrl: './talk-to-doctor-form.component.html',
  styleUrls: ['./talk-to-doctor-form.component.scss']
})
export class TalkToDoctorFormComponent implements OnInit {
  callForm!:FormGroup
  requsetflg:boolean=false
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.callForm =this.fb.group({
      'patientType':[null,[Validators.required]],
      'Pname':[null,[Validators.required]],
      relationship:['',[]],
      gender:[null,[Validators.required]],
      symptom:['',[Validators.required]],
      age:['',[Validators.required]],
      mobileNo:['',[Validators.required]],
    })
  }
  RequestCall(){

  console.log(this.callForm.value)
  this.requsetflg = true
  
  }

}
