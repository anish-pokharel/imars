import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  showModalFlag: boolean = false;
  // origin: { value: string, latitude: number, longitude: number } | undefined;
  // destination: { value: string, latitude: number, longitude: number } | undefined;
  origin?: string;
  destination?: string;
  originLatitude: number | undefined;
  originLongitude: number | undefined;
  destinationLatitude: number | undefined;
  destinationLongitude: number | undefined;
  distance: number = 0;
  email: string | undefined;
  bookingDate: string | undefined;
  endingDate: string | undefined;
  minBookingDate: string | undefined;
  minEndingDate: string | undefined;
  totalPrice: number | undefined;
  otpValue: string = '';
  selectedFood: { type: string, price: number } | null = null;
  vegQuantity: number | undefined; // New property for veg quantity
  nonVegQuantity: number | undefined;

  @ViewChild('originSelect')
  originSelectRef!: ElementRef;
  @ViewChild('destinationSelect')
  destinationSelectRef!: ElementRef;
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
    this.calculateDistance()
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

  // calculateTotalPrice() {
  //   if (this.origin === this.destination) {
  //     alert('Origin and Destination cannot be the same.');
  //     return;
  //   }

  //   const bookingDate = new Date(this.bookingDate!);
  //   const endingDate = new Date(this.endingDate!);

  //   if (bookingDate.getTime() === endingDate.getTime()) {
  //     alert('Booking and Ending dates cannot be the same.');
  //     return;
  //   }

  //   const today = new Date();
  //   today.setDate(today.getDate() + 2); // Booking date should start from 2 days after the current date

  //   if (bookingDate <= today) {
  //     alert('Booking date should start from 2 days after the current date.');
  //     return;
  //   }

  //   if (endingDate <= bookingDate) {
  //     alert('Ending date should be greater than the booking date.');
  //     return;
  //   }

  //   const durationInDays = (endingDate.getTime() - bookingDate.getTime()) / (1000 * 3600 * 24);
  //   this.totalPrice = durationInDays * 10000;
  // }
  calculateTotalPrice(): void {
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
    const vegPrice = 150;
    const nonVegPrice = 200;
    const foodCost = (this.vegQuantity || 0) * vegPrice + (this.nonVegQuantity || 0) * nonVegPrice;

    this.totalPrice = (durationInDays * 10000) + foodCost;
  }




  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  // Assuming origin and destination have the following structure:
  // origin: { value: string, latitude: number, longitude: number };
  // destination: { value: string, latitude: number, longitude: number };

  toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
  calculateDistance() {
    const originSelect = this.originSelectRef.nativeElement as HTMLSelectElement;
    const destinationSelect = this.destinationSelectRef.nativeElement as HTMLSelectElement;

    const originOption = originSelect.options[originSelect.selectedIndex];
    const destinationOption = destinationSelect.options[destinationSelect.selectedIndex];

    const originLatitude = originOption.getAttribute('latitude');
    const originLongitude = originOption.getAttribute('longitude');
    const destinationLatitude = destinationOption.getAttribute('latitude');
    const destinationLongitude = destinationOption.getAttribute('longitude');


    console.log('Origin:');
    console.log('Latitude:', originLatitude);
    console.log('Longitude:', originLongitude);

    console.log('Destination:');
    console.log('Latitude:', destinationLatitude);
    console.log('Longitude:', destinationLongitude);

    if (originLatitude && originLongitude && destinationLatitude && destinationLongitude) {
      const originLatitudeNum = parseFloat(originLatitude);
      const originLongitudeNum = parseFloat(originLongitude);
      const destinationLatitudeNum = parseFloat(destinationLatitude);
      const destinationLongitudeNum = parseFloat(destinationLongitude);

      const earthRadiusKm = 6371;
      const originLatitudeRadians = this.toRadians(originLatitudeNum);
      const originLongitudeRadians = this.toRadians(originLongitudeNum);
      const destinationLatitudeRadians = this.toRadians(destinationLatitudeNum);
      const destinationLongitudeRadians = this.toRadians(destinationLongitudeNum);

      const dlat = destinationLatitudeRadians - originLatitudeRadians;
      const dlon = destinationLongitudeRadians - originLongitudeRadians;
      const a = Math.sin(dlat / 2) * Math.sin(dlat / 2)
        + Math.cos(originLatitudeRadians) * Math.cos(destinationLatitudeRadians)
        * Math.sin(dlon / 2) * Math.sin(dlon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadiusKm * c;


      console.log('Distance (in kilometers):', distance);
    } else {
      console.log('Latitude or longitude values are missing.');
    }

    //   console.log('Origin (in radians):');
    //   console.log('Latitude:', this.toRadians(originLatitudeNum));
    //   console.log('Longitude:', this.toRadians(originLongitudeNum));

    //   console.log('Destination (in radians):');
    //   console.log('Latitude:', this.toRadians(destinationLatitudeNum));
    //   console.log('Longitude:', this.toRadians(destinationLongitudeNum));
    // } else {
    //   console.log('Latitude or longitude values are missing.');


    // }

  }
}