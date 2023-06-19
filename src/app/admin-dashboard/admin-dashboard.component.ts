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




  constructor() {
    this.currentSection = 'pending'; // Set the initial section to 'pending'
    this.acceptedRequests = []; // Initialize the array for accepted requests
    this.rejectedRequests = []; // Initialize the array for rejected requests
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
