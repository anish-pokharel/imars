import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/service/data.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentSection: string = 'basic';
  acceptedRequests: any[];
  rejectedRequests: any[];
  formData: any = {};
  token: string = '';
  contacts: any = {};



  constructor(private dataservice: DataService, private http: HttpClient) {
    this.currentSection = 'pending';
    this.acceptedRequests = [];
    this.rejectedRequests = [];
  }


  ngOnInit(): void {
    this.getTokenFromDatabase(); // Call the method to get the token from the database
    this.getContacts();
  }
  getTokenFromDatabase(): void {
    const token = localStorage.getItem('token');
    console.log('Token stored:', token);
    if (!token) {
      console.error('Token not found');
      return;
    }

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
    const token = localStorage.getItem('token');
    console.log('Token stored:', token);
    debugger
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set("Authorization", token);
    }
    debugger
    console.log(headers);
    debugger
    this.http.get<any>('http://localhost:3000/admin-dashboard', { headers: headers }).subscribe(
      (response) => {
        debugger
        this.contacts = response.contacts;
        debugger
        console.log("contact retrieved!!", response.contacts);
        debugger
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
    debugger
  }

  onSubmit(): void {
    const token = localStorage.getItem('token');
    console.log('Token stored:', token);
    debugger
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set("Authorization", token);
    }
    debugger
    console.log(headers);
    debugger
    this.http.post('http://localhost:3000/admin-dashboard', this.formData, { headers: headers }).subscribe(
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
}