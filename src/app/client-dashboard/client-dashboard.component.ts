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

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      console.log('Password change successful!');
    } else {
      console.log('Passwords do not match');
    }
  }
}
