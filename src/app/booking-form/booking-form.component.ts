import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  showModalFlag: boolean = false;
  otpValue: string = '';
  constructor(private router: Router) {

  }
  actionBooking() {
    // this.router.navigate(['/booking-confirm']);


  }
  showModal() {
    this.showModalFlag = true;
  }
  submitOTP(){
    // this.hideModal();

  }
  hideModal() {
    this.showModalFlag = false;
    this.otpValue = ''; 
  }}
