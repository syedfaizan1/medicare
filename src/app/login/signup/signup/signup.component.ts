import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  otpGenerated!:number;
  isVerifyOtp:boolean =false;
  isGetOtp:boolean = false
  otpTimer:number;

  otpMessage:boolean=false

  // @Output() onSignUpcomplete:EventEmitter<boolean> = new EventEmitter()

  signUpComplete:boolean=false

  sub:any
  isSignUpSuccess: boolean;
  constructor(private fb:FormBuilder,private http:HttpService) { }

  ngOnInit(): void {

this.createSignupForm()
  }

  createSignupForm(){
    this.signUpForm = this.fb.group({

      'userName':['',[Validators.required]],
      'mobileNo':['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      'password':['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      'isMobileNoVerified':[false,[]]

    })
  }


  getOtp(){
    this.isGetOtp = true ;
    //generated 4 digit random number
    this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
    console.log(this.otpGenerated);
    
    this.timer()

  }

  

  verifyOtp(otp_value:any){
//  console.log(typeof(Number(otp_value)));

 if(Number(otp_value) === this.otpGenerated){
  this.isVerifyOtp = true
  this.isGetOtp = false
  this.signUpForm.controls['isMobileNoVerified'].setValue(true);
  this.sub.unsubscribe()
 
 }
 
 
 
  }

  timer(){
  this.sub =interval(1000).subscribe((res)=>{
      this.otpTimer = 61-res

      if( this.otpTimer == 0){
        this.sub.unsubscribe()
        
       this.otpMessage=true
      }
      
})
  }

  signUp(){
    if(this.isVerifyOtp){
      console.log(this.signUpForm.value);
      this.http.postDetailsToServer('users',this.signUpForm.value).subscribe((response:any)=>{
        if(response){
             this.isSignUpSuccess = true ;
            console.log(response);
            this.signUpForm.reset()
            alert('sign up successful please login')
        }else {
          this.isSignUpSuccess = false;
        }

      })
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  // onSignUp(){
  //   this.onSignUpcomplete.emit( this.signUpForm.controls['isMobileNoVerified'].value)
  // }

  getOtpOnResend(){
    this.getOtp()
    this.otpMessage= false
  }

}
