import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as alertify from 'alertifyjs';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  controls: any
  loginForm!: FormGroup
  title = 'formvalidation';
  showOptField = false;
  submitted = false;

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private cookieService: CookieService) {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      // password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }


  ngOnInit() {

  }
  ngDestory() {

  }
  formSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.http.post<any>('http://localhost:3000/login-page', formData).subscribe(
        (response) => {
          console.log('Login successfull');
          alertify.success('Login successfull');
          // Redirect the user based on the response or token received
          if (response.token) {
            // localStorage.setItem('token', response.token);
            // console.log('Token stored:', localStorage.getItem('token'));

            this.cookieService.set('jwt', response.token);
            console.log('Token stored:', this.cookieService.get('jwt'));

            if (formData.Email === 'admin@gmail.com') {
              this.router.navigate(['./admin-dashboard']);
            } else {
              this.router.navigate(['./main-page']);
            }
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error loggingin:', error);
          // alert('Error Login. Please check Username and Passoword');
          alertify
            .alert("Error Login. Please check Username and Passoword.", function () {
              alertify.message('Recheck Username and Password');
            });
        }
      );
    }
  }
  forgetPasswordModal() { }
}






