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
  submitOTP() {
    this.router.navigate(['/booking-confirm']);
    // this.hideModal();

  }
  hideModal() {
    this.showModalFlag = false;
    this.otpValue = '';
  }

  submitFood() {
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    const selectedOptions = Array.from(checkboxes).map(checkbox => (checkbox as HTMLInputElement).value);

    console.log('Selected:', selectedOptions);
    // Perform actions with the selected options
  }
}
