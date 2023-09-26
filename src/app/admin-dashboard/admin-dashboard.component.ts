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
  formData: any = {};
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

  onSubmit(): void {
    const token = this.cookieService.get('jwt');

    if (!token) {
      console.error('Token not found');
      return;
    }
    // Make an HTTP request to save the data to the backend API
    this.http.post('http://localhost:3000/admin-dashboard', this.formData, { withCredentials: true }).subscribe(
      (response) => {
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
    // Update the request status and move it to the acceptedRequests array
    request.status = 'accepted';
    this.acceptedRequests.push(request);

    // Remove the request from the bookingForm array
    const index = this.bookingForm.indexOf(request);
    if (index !== -1) {
      this.bookingForm.splice(index, 1);
    }
  }

  // Function to reject a request and move it to the "Rejected" section
  rejectRequest(request: any) {
    // Update the request status and move it to the rejectedRequests array
    request.status = 'rejected';
    this.rejectedRequests.push(request);

    // Remove the request from the bookingForm array
    const index = this.bookingForm.indexOf(request);
    if (index !== -1) {
      this.bookingForm.splice(index, 1);
    }
  }



}