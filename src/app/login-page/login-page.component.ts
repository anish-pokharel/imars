import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  controls:any
  loginForm!: FormGroup
  title ='formvalidation';
  showOptField=false;
  submitted=false;

  constructor(private router: Router,private fb:FormBuilder){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      Password: ['', Validators.required],
      // password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  

  ngOnInit() {
   
  }
  ngDestory(){

  }
  formSubmit(){
    this.router.navigate(['/main-page'])  
  }
  forgetPasswordModal(){}



}
 
  
 
 
 

