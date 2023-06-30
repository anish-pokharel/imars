import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  // users: any[] = [
  //   {
  //     "name": "John Smith",
  //     "username": "jsmith91",
  //     "location": "New York, USA",
  //     "occupation": "Software Engineer",
  //     "bio": "Passionate software engineer with 5 years of experience...",
  //     "interests": "Technology, software development, programming languages"
  //   },];
    bookingForm: any[] = [];
    registerForm: any = {};

  

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      console.log('Password change successful!');
    } else {
      console.log('Passwords do not match');
    }
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    
    const userId = this.route.snapshot.params['id'];
    this.getData(userId);
   
  }
  getData(userId : string): void {
    this.http.get<any>('http://localhost:3000/client-dashboard/${userId}').subscribe(
      (data) => {
        //this.bookingForm = data.bookingForm;
        this.registerForm = data.registeredUser;
      },
      (error) => {
        console.error('Error getting data:', error);
      }
    );
  }
}
