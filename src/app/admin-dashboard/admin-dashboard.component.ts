import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  currentSection: string = 'basic';
  acceptedRequests: any[];
  rejectedRequests: any[];
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



  constructor() {
    this.currentSection = 'basic';
    this.acceptedRequests = [];
    this.rejectedRequests = [];
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
