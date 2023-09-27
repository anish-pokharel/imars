import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';



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
  token: string = '';
  bookingForm: any[] = [];
  registerForm: any = {};
  acceptedRequests: any[] = [];
  rejectedRequests: any[] = [];




  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private cookieService: CookieService) { }
  ngOnInit(): void {

    this.getTokenFromDatabase(); // Call the method to get the token from the database
    this.getData();

  }
  getTokenFromDatabase(): void {
    const token = this.cookieService.get('jwt');
    console.log('Token stored:', token);
    if (!token) {
      console.error('Token not found');
    }

  }

  getData(): void {
    const token = this.cookieService.get('jwt');
    console.log('Token stored:', token);
    if (!token) {
      console.error('Token not found');
    }
    this.http.get<any>('http://localhost:3000/client-dashboard', { withCredentials: true }).subscribe(
      (response) => {
        debugger
        this.bookingForm = response.bookingForm;
        this.registerForm = response.registeredUser;
        this.acceptedRequests = response.acceptedRequests;
        this.rejectedRequests = response.rejectedRequests;
        debugger
        console.log("bookingForm retrieved!", this.bookingForm);
        console.log("regsiterform retrieved!", this.registerForm);
        console.log("acceptedrequests retrieved!", this.acceptedRequests);
        console.log("rejectedrequests retrieved!", this.rejectedRequests);
        debugger
      },
      (error) => {
        console.error('Error getting data:', error);
        debugger
      }
    );
  }
  OnSubmit() {
    const token = this.cookieService.get('jwt');
    console.log('Token stored:', token);
    if (!token) {
      console.error('Token not found');
    }
    if (this.newPassword === this.confirmPassword) {
      debugger
      this.http.post('http://localhost:3000/client-dashboard', {
        CurrentPasswored: this.currentPassword,
        NewPassword: this.newPassword,
        ConfirmPassword: this.confirmPassword
      }, { withCredentials: true }).subscribe(
        (response) => {
          debugger
          console.log('Password change successful!');
          this.router.navigate(['./client-dashboard'])
        },
        (error) => {
          console.error('Error changing password:', error);
          debugger
        }
      );
    } else {
      console.log('Passwords do not match');
    }
  }



}
