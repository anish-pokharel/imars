import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  showModalFlag: boolean = false;
  otpValue: string = '';
  constructor(private router: Router, private http: HttpClient) {

  }
  actionBooking() {
    // this.router.navigate(['/booking-confirm']);


  }
  showModal() {
    this.showModalFlag = true;
  }
  submitOTP() {
    this.router.navigate(['/booking-confirm']);
    // this.hideModal();

  }
  hideModal() {
    this.showModalFlag = false;
    this.otpValue = '';
  }
  ngOnInit(): void {
      
  }
}
