import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/service/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentSection: string = 'basic';
  bookingForm: any[] = [];
  acceptedRequests: any[];
  rejectedRequests: any[];
  // formData: any = {};
  formData: any = {
    image: null, // Initialize image as null or with a default File object if needed
    // Add other properties if necessary
  };
  
  
  token: string = '';
  contacts: any = {};



  constructor(private dataservice: DataService, private http: HttpClient, private cookieService: CookieService) {
    this.currentSection = 'pending';
    //this.bookingForm = [];
    this.acceptedRequests = [];
    this.rejectedRequests = [];
  }



  ngOnInit(): void {
    this.getTokenFromDatabase(); // Call the method to get the token from the database
    this.getContacts();
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

    this.http.get<any>('http://localhost:3000/admin-dashboard', { withCredentials: true }).subscribe(
      (response) => {
        debugger
        this.contacts = response.contacts;
        this.bookingForm = response.bookingForm;
        debugger
        console.log("contact retrieved!!", this.contacts);
        console.log("accepted buses retrieved!!", this.bookingForm);
        debugger
        // Perform any necessary operations with the fetched contacts
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
    debugger
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input?.files[0]) {
      this.formData.image = input.files[0];
    }
  }
  
//   onSubmit(): void {
//     const token = this.cookieService.get('jwt');

//     if (!token) {
//       console.error('Token not found');
//       return;
//     }
//     debugger
//     const formData = new FormData();
//     debugger
//     console.log('formData:', formData);
// debugger
//     console.log(this.formData.image);
//     debugger
//     formData.append('BusNumber', this.formData.BusNumber);
//     formData.append('BusType', this.formData.BusType);
//     debugger
//     formData.append('image', this.formData.image, this.formData.image.name);
//     debugger
//     formData.append('SeatNumber', this.formData.SeatNumber);
  
//     // Make an HTTP request to save the data to the backend API
//     this.http.post('http://localhost:3000/admin-dashboard', formData, { withCredentials: true }).subscribe(
//       (response) => {
//         debugger
//         console.log(formData);
//         debugger
//         console.log('Data saved successfully');

//       },
//       (error) => {
//         console.error('Error registering admin:', error);
//       }
//     );
//   }

onSubmit(): void {
      const token = this.cookieService.get('jwt');

    if (!token) {
      console.error('Token not found');
      return;
    }
    debugger
  const formData = new FormData();
  formData.append('BusNumber', this.formData.BusNumber);
  debugger
  formData.append('BusType', this.formData.BusType);
  debugger
  formData.append('image', this.formData.image, this.formData.image.name);
  debugger
  formData.append('SeatNumber', this.formData.SeatNumber);

  // Make an HTTP request to save the data to the backend API
  this.http.post('http://localhost:3000/admin-dashboard', formData, { withCredentials: true }).subscribe(
    (response) => {
      debugger
      console.log(formData);
      debugger
      console.log('Data saved successfully');
    },
    (error) => {
      console.error('Error registering admin:', error);
    }
  );
}



  showSection(section: string): void {
    this.currentSection = section;
  }

  acceptRequests(request: any): void {
    this.acceptedRequests.push(request);
    this.rejectedRequests = this.rejectedRequests.filter(r => r !== request);

  }
  rejectRequests(request: any): void {
    this.rejectedRequests.push(request);
    this.acceptedRequests = this.acceptedRequests.filter(r => r !== request);

  }

  acceptRequest(request: any) {
    const token = this.cookieService.get('jwt');

    if (!token) {
      console.error('Token not found');
      return;
    }
    debugger
    // Update the request status and move it to the acceptedRequests array
    //request.status = 'accepted';
    request.Decision='accepted';
    debugger
    delete request._id;
    debugger
    this.acceptedRequests.push(request);
    
    debugger
    console.log(request);
    debugger
             this.http.post('http://localhost:3000/booking-form', request, { withCredentials: true }).subscribe(
            (response:any) => {
      debugger
      console.log('Accepted Data saved successfully');
    },
    (error:any) => {
      console.error('Error saving data:', error);
    }
  );

    // Remove the request from the bookingForm array
    const index = this.bookingForm.indexOf(request);
    if (index !== -1) {
      this.bookingForm.splice(index, 1);
    }
  }

  // Function to reject a request and move it to the "Rejected" section
  rejectRequest(request: any) {
    const token = this.cookieService.get('jwt');

    if (!token) {
      console.error('Token not found');
      return;
    }
    debugger
    // Update the request status and move it to the rejectedRequests array
    //request.status = 'rejected';
    request.Decision='rejected';
    debugger
    delete request._id;
    debugger
    this.rejectedRequests.push(request);
    debugger
    console.log(request);
    debugger
    this.http.post('http://localhost:3000/booking-form', request, { withCredentials: true }).subscribe(
            (response:any) => {
      debugger
      console.log('Rejected Data saved successfully');
    },
    (error:any) => {
      console.error('Error saving data:', error);
    }
  );

    // Remove the request from the bookingForm array
    const index = this.bookingForm.indexOf(request);
    if (index !== -1) {
      this.bookingForm.splice(index, 1);
    }
  }



}