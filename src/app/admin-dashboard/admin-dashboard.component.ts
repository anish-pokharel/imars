import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/service/data.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentSection: string = 'basic';
  bookingForm: any[]=[];
  acceptedRequests:any[];
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
      return;
    }
   // document.cookie = `jwt=${token}`; // Set the token as a cookie

   /* const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<any>('http://localhost:3000/authenticateUser', { headers }).subscribe(
      (response) => {
        this.token = response.token;
        this.getContacts(); // Call the method to fetch contacts after successful token verification
      },
      (error) => {
        console.error('Error retrieving token:', error);
      }
    );*/
  }
  getContacts(): void {

    const token = this.cookieService.get('jwt');

  if (!token) {
    console.error('Token not found');
    return;
  }
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

    console.log("header",headers);
    this.http.get<any>('http://localhost:3000/admin-dashboard',{ headers:headers }).subscribe(
      (response) => {
        debugger
        this.contacts = response.contacts;
        this.bookingForm=response.bookingForm;
        debugger
        console.log("contact retrieved!!",this.contacts);
        console.log("accepted buses retrieved!!",this.bookingForm);
        debugger
        // Perform any necessary operations with the fetched contacts
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
    debugger
  }
  
  // onSubmit() {
  //   this.dataservice.registerAdmin(this.formData).subscribe(
  //     (response) => {
  //       console.log('Registration successful');
  //       this.formData = {};
  //     },
  //     (error) => {
  //       console.error('Error registering admin:', error);
  //     }
  //   );
  // }
  // onSubmit(data: any): void {
  //   const token = localStorage.getItem('token');
  //   console.log('Token stored:', token);
  //   debugger
  //   // Set the Authorization header with the retrieved token
  //   // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   // const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  //   console.log(headers)
  //   debugger
  //   // Make an HTTP request to save the data to the backend API
  //   this.http.post('http://localhost:3000/admin-dashboard', data, { headers }).subscribe(
  //     (response) => {
  //       console.log('Data saved successfully');
  //     },
  //     (error) => {
  //       console.error('Error registering admin:', error);
  //     }
  //   );
  // }
  onSubmit(): void {
    // Make an HTTP request to save the data to the backend API
    this.http.post('http://localhost:3000/admin-dashboard', this.formData, ).subscribe(
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

  acceptRequests(request: any) :void{
    this.acceptedRequests.push(request);
    this.rejectedRequests = this.rejectedRequests.filter(r => r !== request);

  }
  rejectRequests(request: any):void {
    this.rejectedRequests.push(request);
    this.acceptedRequests = this.acceptedRequests.filter(r => r !== request);

  }
}