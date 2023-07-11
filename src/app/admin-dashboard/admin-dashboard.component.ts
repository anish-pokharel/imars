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
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    debugger
    this.http.get<any>('http://localhost:3000/admin-dashboard', { headers }).subscribe(
      (response) => {
        this.contacts = response.contacts;
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
    // Make an HTTP request to save the data to the backend API
    this.http.post('http://localhost:3000/admin-dashboard', this.formData, {headers : headers}).subscribe(
      (response) => {
        console.log('Data saved successfully');
        console.log("'menuka don'")
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