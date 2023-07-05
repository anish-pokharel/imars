import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/service/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentSection: string = 'basic';
  acceptedRequests: any[];
  rejectedRequests: any[];
  formData: any = {}
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



  constructor(private dataservice: DataService) {
    this.currentSection = 'pending';
    this.acceptedRequests = [];
    this.rejectedRequests = [];
  }


  ngOnInit(): void {

  }
  onSubmit() {
    this.dataservice.registerAdmin(this.formData).subscribe(
      (response) => {
        console.log('Registration successful');
        this.formData = {};
      },
      (error) => {
        console.error('Error registering admin:', error);
      }
    );
  }


  showSection(section: string) {
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
