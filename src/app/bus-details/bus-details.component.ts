import { Component, ElementRef, ViewChild } from '@angular/core';
// import { ModalService } from '../service/modal/modal.service';
import { Router } from '@angular/router';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent {

  data = {

    "buses": [
      {
        "number": "Bus-1",
        "img": "../../assets/img/about/about-me.jpg",
        "seatNo": "40",
        "available": true
      },
      {
        "number": "Bus-2",
        "img": "../../assets/img/about/about-me.jpg",
        "seatNo": "40",
        "available": false
      },
      {
        "number": "Bus-3",
        "img": "../../assets/img/about/about-me.jpg",
        "seatNo": "20",
        "available": true
      },
      {
        "number": "Bus-4",
        "img": "../../assets/img/about/about-me.jpg",
        "seatNo": "20",
        "available": false
      },
      {
        "number": "1020",
        "img": "../../assets/img/about/about-me.jpg",
        "seatNo": "42",
        "available": true
      },
      {
        "number": "1030",
        "img": "../../assets/img/about/about-me.jpg",
        "seatNo": "24",
        "available": false
      }
    ]

  }
  constructor(
    // private modalSrv$: ModalService,
    private modalService: NgbModal,
    private router: Router
  ) { }
  actionBook() {
    this.router.navigate(['/booking-form']);
  }
  actionImage(content: any) {
    this.modalService.open(content);


  }
  onSubmit() { }
}
