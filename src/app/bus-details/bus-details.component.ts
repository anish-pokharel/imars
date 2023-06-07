import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent {
  constructor(private router: Router) { }
  actionBook() {
    this.router.navigate(['/booking-form']);
  }

}
