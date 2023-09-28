import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import KhaltiCheckout from "khalti-checkout-web";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-booking-confirm',
  templateUrl: './booking-confirm.component.html',
  styleUrls: ['./booking-confirm.component.scss']
})
export class BookingConfirmComponent implements OnInit {

  currentDate: string | undefined;
  bookingSlipNumber: number = 1;
  token: string = '';
  booking:any= {};
  // bookingForm: any = {};
  // busNumber: string | null = null;


  constructor(private datePipe: DatePipe, private http: HttpClient,
    private route: ActivatedRoute, private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'longDate');
    this.currentDate = formattedDate || '';
    this.getTokenFromDatabase();
    this.getContacts();
  }
  incrementBookingSlipNumber(): void {
    this.bookingSlipNumber++;
  }
  getTokenFromDatabase(): void {
    const token = this.cookieService.get('jwt');
    console.log('Token stored:', token);
    if (!token) {
      console.error('Token not found');
    }
  }
  getContacts(): void {
    const token = this.cookieService.get('jwt');

    if (!token) {
      console.error('Token not found');
      return;
    }

    this.http.get<any>('http://localhost:3000/booking-confirm', { withCredentials: true }).subscribe(
      (response) => {
        debugger
        this.booking = response.booking;
        debugger
        console.log("slip retrieved!!", this.booking);
        debugger
        // Perform any necessary operations with the fetched contacts
      },
      (error) => {
        console.error('Error fetching slip:', error);
      }
    );
    debugger
  }
  exportAsPDF() {
    const pdfData = '<your PDF data>';

    const blob = new Blob([pdfData], { type: 'application/pdf' });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.pdf';

    link.click();

    window.URL.revokeObjectURL(url);
  }



  makePayment() {
    const config = {
      // replace this key with yours
      "publicKey": "test_public_key_0275cc5e2bae42fb890536aae01e9e73",
      "productIdentity": "1234567890",
      "productName": "Drogon",
      "productUrl": "http://gameofthrones.com/buy/Dragons",
      "eventHandler": {
        onSuccess: (payload: any) => {
          debugger;
          console.log(payload);
          debugger;

          // Access the http service within the arrow function
          this.http.post('http://localhost:3000/khalti-callback', payload, { withCredentials: true }).subscribe(
            (response: any) => {
              debugger;
              console.log('Data saved successfully');
            },
            (error: any) => {
              console.error('Error registering admin:', error);
            }
          );
        },
        onError: (error: any) => {
          console.log(error);
        },
        onClose: () => {
          console.log('widget is closing');
        }
      },
      "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const checkout = new KhaltiCheckout(config);
    checkout.show({ amount: 1000 });
  }



}