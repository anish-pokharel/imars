import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      Name: [''],
      Email: [''],
      Address: [''],
      Phone: [0],
      Gender: [false],
      Password: [''],
      ConfirmPassword: [''],
      //AgreementCheckbox: [false, Validators.requiredTrue]
    });
  }


  onSubmit() {
    if (this.registerForm.value.Password.length>=6 ) {
     
      if(this.registerForm.value.Password === this.registerForm.value.ConfirmPassword){
        console.log('Password matched');
        if( this.registerForm.value.Phone>0){
          // if (!this.registerForm.invalid) {
          //   alert("Please enter valid information.");
          //   return;
    
          // }
    
    
          // if (!this.registerForm.value.agreementCheckbox) {
          // alert("Please agree to the Terms and Data Policy.");
          // return;
          // }
          const formData = this.registerForm.value;
          this.http.post('http://localhost:3000/registration-page', formData).subscribe(
            (response) => {
              alert("User registered successfully");
              console.log('User registered successfully');
              this.router.navigate(['./login-page']);
            },
            (error: HttpErrorResponse) => {
              console.error('Error registering user:', error);
              alert("Error registering user");
            }
          );
        }else{
            alert("Mobile Number must be 10 digits and not zero");
        }
      }
      else{
      alert("Passwords do not match");
      }
    }
    else {
      alert('Password must be atleast 6 digits');
    }
}

ngOnInit(): void {

  }

}