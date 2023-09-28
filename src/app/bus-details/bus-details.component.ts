import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../service/modal/modal.service';

/*interface Bus {
  number: string;
  img: string;
  seatNo: string;
  available: boolean;
  category: string;
  [key: string]: string | boolean;
}*/

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {
  isModalOpen: boolean = false;
  param: any;
  selectedBusImage!: string;
  availableBuses: any[] = [];
  notAvailableBuses: any[]=[];

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private router: Router
  ) { }
  actionBook(busNumber: string) {
    this.router.navigate(['/booking-form', busNumber]);
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
    this.getBusDetails();
  }
  getBusDetails(): void {
    debugger
    this.http.get<any>('http://localhost:3000/bus-details').subscribe(
      (response) => {
        debugger

        this.availableBuses = response.availableBuses;
        this.notAvailableBuses = response.notAvailableBuses;
      
        debugger
        console.log("Available Buses!!", this.availableBuses);
        console.log("Not Available Buses!!", this.notAvailableBuses);
        debugger
        // Perform any necessary operations with the fetched contacts
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
}
