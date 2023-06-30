import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  origin: string | undefined;
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
  ngOnInit(): void {
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
  }

  isSubmitDisabled(): boolean {
    return (
      !this.origin ||
      !this.destination ||
      !this.bookingDate ||
      !this.endingDate
      ||
      !this.totalFee
    );
  }
}
