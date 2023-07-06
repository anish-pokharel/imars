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
  token:string='';
  contacts: any[] = [
    {
      "name": "John Smith",
      "email": "john@example.com",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "message": "Pellentesque eget nulla dapibus, commodo turpis sit amet, volutpat elit."
    },
  ];



  constructor(private dataservice: DataService,private http: HttpClient) {
    this.currentSection = 'pending';
    this.acceptedRequests = [];
    this.rejectedRequests = [];
  }


  ngOnInit(): void {
    this.getTokenFromDatabase(); // Call the method to get the token from the database
  }
  getTokenFromDatabase(): void {
    // Make an HTTP request to your backend API to retrieve the token from the database
    this.http.get<any>('your-backend-url/get-token').subscribe(
      (response) => {
        this.token = response.token;
      },
      (error) => {
        console.error('Error retrieving token:', error);
      }
    );
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
  onSubmit(data: any): void {
    // Set the Authorization header with the retrieved token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    
  
    // Make an HTTP request to save the data to the backend API
    this.http.post('your-backend-url/save-data', data, { headers }).subscribe(
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

  acceptRequests(request: any) {
    this.acceptedRequests.push(request);
    this.rejectedRequests = this.rejectedRequests.filter(r => r !== request);

  }
  rejectRequests(request: any) {
    this.rejectedRequests.push(request);
    this.acceptedRequests = this.acceptedRequests.filter(r => r !== request)

  }
}