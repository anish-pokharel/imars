import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../service/modal/modal.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {
  isModalOpen: boolean = false;
  param: any;
  selectedBusImage!: string;

  data = {

    "buses": [
      {
        "number": "Bus-1",
        "img": "../../assets/img/Bus/Bus1_auto_x2.jpg",
        "img1": "../../assets/img/about/about-me.jpg",
        "img2": "../../assets/img/about/about-me.jpg",
        "img3": "../../assets/img/about/about-me.jpg",
        "img4": "../../assets/img/about/about-me.jpg",
        "seatNo": "40",
        "available": true
      },
      {
        "number": "Bus-2",
        "img": "../../assets/img/Bus/Bus2_auto_x2.jpg",
        "seatNo": "40",
        "available": false
      },
      {
        "number": "Bus-3",
        "img": "../../assets/img/Bus/Bus3_auto_x2.jpg",
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
    private modalService: NgbModal,

    private router: Router
  ) { }
  actionBook() {
    this.router.navigate(['/booking-form']);
  }
  actionImage(content: any, busImage: string) {
    this.selectedBusImage = busImage;
    this.modalService.open(content, { centered: true });
  }
  onSubmit() { }
  closeModal() {
    this.modalService.dismissAll();
  }


  ngOnInit(): void {

  }

}
