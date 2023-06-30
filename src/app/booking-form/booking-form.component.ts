import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  showModalFlag: boolean = false;
  origin!: string;
  destination: string | undefined;
  email: string | undefined;
  bookingDate: string | undefined;
  endingDate: string | undefined;
  minBookingDate: string | undefined;
  minEndingDate: string | undefined;
  totalPrice: number | undefined;
  otpValue: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const today = new Date();
    today.setDate(today.getDate() + 2); // Booking date should start from 2 days after the current date
    this.minBookingDate = this.formatDate(today);
    this.bookingDate = this.formatDate(today);

    const defaultEndingDate = new Date(today);
    defaultEndingDate.setDate(defaultEndingDate.getDate() + 1); // Default duration of 1 day
    this.endingDate = this.formatDate(defaultEndingDate);
    this.minEndingDate = this.formatDate(defaultEndingDate);
  }

  updateMinEndingDate() {
    if (this.bookingDate) {
      const bookingDate = new Date(this.bookingDate);
      bookingDate.setDate(bookingDate.getDate() + 1); // Ending date should start from 1 day after the booking date
      this.minEndingDate = this.formatDate(bookingDate);
    }
  }

  isBookingDateValid(): boolean {
    if (!this.bookingDate) {
      return false;
    }

    const bookingDate = new Date(this.bookingDate);
    const today = new Date();
    today.setDate(today.getDate() + 2); // Booking date should start from 2 days after the current date

    return bookingDate >= today;
  }

  isEndingDateValid(): boolean {
    if (!this.endingDate || !this.bookingDate) {
      return false;
    }

    const endingDate = new Date(this.endingDate);
    const bookingDate = new Date(this.bookingDate);

    return endingDate > bookingDate;
  }

  showModal() {
    // Check if any required field is empty
    if (!this.origin || !this.destination || !this.email || !this.bookingDate || !this.endingDate) {
      return;
    }

    this.showModalFlag = true;
  }

  submitOTP() {
    if (this.otpValue === '4646') {
      this.router.navigate(['/booking-confirm']);
      console.log('Submit clicked');
    } else {
      alert('Invalid OTP');
    }
  }

  hideModal() {
    this.showModalFlag = false;
    this.otpValue = '';
  }

  submitFood() {
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    const selectedOptions = Array.from(checkboxes).map(checkbox => (checkbox as HTMLInputElement).value);

    console.log('Selected:', selectedOptions);
  }

  calculateTotalPrice() {
    if (this.origin === this.destination) {
      alert('Origin and Destination cannot be the same.');
      return;
    }

    const bookingDate = new Date(this.bookingDate!);
    const endingDate = new Date(this.endingDate!);

    if (bookingDate.getTime() === endingDate.getTime()) {
      alert('Booking and Ending dates cannot be the same.');
      return;
    }

    const today = new Date();
    today.setDate(today.getDate() + 2); // Booking date should start from 2 days after the current date

    if (bookingDate <= today) {
      alert('Booking date should start from 2 days after the current date.');
      return;
    }

    if (endingDate <= bookingDate) {
      alert('Ending date should be greater than the booking date.');
      return;
    }

    const durationInDays = (endingDate.getTime() - bookingDate.getTime()) / (1000 * 3600 * 24);
    this.totalPrice = durationInDays * 10000;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
