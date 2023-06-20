import { Component } from '@angular/core';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  users: any[] = [
    {
      "name": "John Smith",
      "username": "jsmith91",
      "location": "New York, USA",
      "occupation": "Software Engineer",
      "bio": "Passionate software engineer with 5 years of experience...",
      "interests": "Technology, software development, programming languages"
    },]

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      console.log('Password change successful!');
    } else {
      console.log('Passwords do not match');
    }
  }
}
