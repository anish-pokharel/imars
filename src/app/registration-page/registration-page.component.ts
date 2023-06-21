import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['',Validators.required],
      Phone: ['',Validators.required],
      Gender: [false,Validators.requiredTrue],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      //AgreementCheckbox: [false, Validators.requiredTrue]
    });
  }


  onSubmit() {
 if (!this.registerForm.invalid) {
     alert("Please enter valid information.");
     return;

     }

    // if (!this.registerForm.value.agreementCheckbox) {
    // alert("Please agree to the Terms and Data Policy.");
    // return;
    // }
    const formData = this.registerForm.value;
    this.http.post('http://localhost:3000/registration-page', formData).subscribe(
      (response) => {
        console.log('User registered successfully');
        this.router.navigate(['./login-page']);
      },
      (error: HttpErrorResponse) => {
        console.error('Error registering user:', error);
        alert('Error registering user. Please try again later.');
      }
    );

  }
  ngOnInit(): void {
      
  }

}