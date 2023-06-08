import { Component, ElementRef, ViewChild } from '@angular/core';
// import { ModalService } from '../service/modal/modal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent {

  constructor(
    // private modalSrv$: ModalService,
    private router: Router
  ) { }
  actionBook() {
    this.router.navigate(['/booking-form']);
  }
  actionImage() {

  }
  onSubmit() { }
}
