import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      agreementCheckbox: [false, Validators.requiredTrue]
    });
  }


  onSubmit() {
    // if (!this.registerForm.invalid) {
    // alert("Please enter valid information.");
    // return;
    this.router.navigate(['./login-page']);


    // }
    // else {
    // return
    // }

    // if (!this.registerForm.value.agreementCheckbox) {
    // alert("Please agree to the Terms and Data Policy.");
    // return;
    // }

    const firstName = this.registerForm.value.firstName;
    const lastName = this.registerForm.value.lastName;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

  }
}