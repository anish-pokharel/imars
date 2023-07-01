import { Component } from '@angular/core';
 import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  contactForm: FormGroup;
isHovering: boolean = false;
  isSliding: boolean = false;
  showMessage = false;


  constructor(private router: Router , private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Message: ['', Validators.required],
    });
  }
  showMessagen() {
    this.isHovering = true;
  }
  hideMessagen() {
    this.isHovering = false;
  }
  showMessagee() {
    this.isSliding = true;
  }
  hideMessagee() {
    this.isSliding = false;
  }
  
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      const value = target.value;
      if (value.trim() !== '') {
        this.showMessage = false;
      } else {
        this.showMessage = true;
      }
    }
  }
  onSubmit() {

    const formData =this.contactForm.value;
    
    this.http.post('http://localhost:3000/home', formData)
      .subscribe(
        () => {
          console.log('Message sent successfully');
          this.router.navigate(['./contact-us']);
        },
        (error: HttpErrorResponse) => {
          alert('Error sending message');
          console.error('Error sending message:', error);
        }
      );
  }
  

}
