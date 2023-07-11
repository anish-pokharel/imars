import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
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

  constructor(private router: Router,private fb:FormBuilder,private http: HttpClient){
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      // password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  

  ngOnInit() {
   
  }
  ngDestory(){

  }
  formSubmit(){
    if (this.loginForm.valid) {
    const formData = this.loginForm.value;
    this.http.post<any>('http://localhost:3000/login-page', formData).subscribe(
      (response) => {
        console.log('Login successfull');
         // Redirect the user based on the response or token received
         if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token stored:', localStorage.getItem('token'));

          if (formData.Email === 'admin@gmail.com') {
            this.router.navigate(['./admin-dashboard']);
          } else {
            this.router.navigate(['./main-page']);
          }
        } 
      },
      (error: HttpErrorResponse) => {
        console.error('Error loggingin:', error);
        alert('Error Loggingin. Please try again later.');
      }
    );
  }
}
  forgetPasswordModal(){}
}
 
  
 
 
 

