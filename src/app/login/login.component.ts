import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../core/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  isNewUser:boolean = false ;
  tokenGenrated:number
  @Output()
  signInSuccess:EventEmitter<boolean> = new EventEmitter(false);
 
   constructor(private fb:FormBuilder,private http:HttpService) { }
 
   ngOnInit(): void {
     this.createForm();
   }
 
   createForm(){
     this.loginForm = this.fb.group({
       'mobile':['',[Validators.required, Validators.pattern('[0-9]{10}')]],
       'password':['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
     })
   }
 
   login() {
     const params: HttpParams = new HttpParams()
       .set('mobile', this.loginForm.controls['mobile'].value)
       .set('password', this.loginForm.controls['password'].value)
 
    this.http.getDetailsFromServer('users',params).subscribe((response:any)=>{
     if(response && response.length > 0){
         var user = response[0];
         let token = "FGHgffgg123gjjhg";
         user['authToken'] = token ; 
         localStorage.setItem('mobile',this.loginForm.controls['mobile'].value)
         localStorage.setItem('authToken',token);
         localStorage.setItem('user',JSON.stringify(user));
         this.isNewUser = false;
         this.signInSuccess.emit(true);
     }else {
       this.isNewUser = true ;
     }
    })
 
   } 

}
