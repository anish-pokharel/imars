import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
=======
>>>>>>> 5bf962f7c69c6bca12b46cb118c3df76b0bd72b7

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
<<<<<<< HEAD
export class BookingFormComponent implements OnInit {
  showModalFlag: boolean = false;
  otpValue: string = '';
  constructor(private router: Router, private http: HttpClient) {
=======
export class BookingFormComponent {
  origin!: string;
  destination: string | undefined;
  minDate: string;
  minEndDate: string;
  places: string[] = ['Place 1', 'Place 2', 'Place 3'];
  showModalFlag: boolean = false;
  otpValue: string = '';
  perDayValue: number = 10000;
  startDate: Date | undefined;
  endDate: Date | undefined;
  bookingDate!: string;
  endingDate!: string;
  totalFee!: number;
>>>>>>> 5bf962f7c69c6bca12b46cb118c3df76b0bd72b7

  constructor(private router: Router) {
    const today = new Date();
    this.minDate = this.formatDate(today);
    today.setDate(today.getDate() + 1);
    this.minEndDate = this.formatDate(today);
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
<<<<<<< HEAD
  ngOnInit(): void {
      
=======

  isSubmitDisabled(): boolean {
    return this.origin === this.destination;
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    return `${month}-${day}-${year}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  calculateTotalFee() {
    const startDate = new Date(this.bookingDate);
    const endDate = new Date(this.endingDate);
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const feePerDay = 10000;
    this.totalFee = days * feePerDay;
>>>>>>> 5bf962f7c69c6bca12b46cb118c3df76b0bd72b7
  }
}
