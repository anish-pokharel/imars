import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ActivatedRoute,Router } from '@angular/router';
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
  token: string = '';
    bookingForm: any[] = [];
    registerForm: any = {} ;



 
  constructor(private http: HttpClient, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    
    this.getTokenFromDatabase(); // Call the method to get the token from the database
    this.getData();

  }
  getTokenFromDatabase(): void {
    const token = localStorage.getItem('token');
    console.log('Token stored:', token);
    if (!token) {
      console.error('Token not found');
      return;
    }
  }
  
  getData(): void {
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
    this.http.get<any>('http://localhost:3000/client-dashboard', { headers : headers}).subscribe(
      (response) => {
        debugger
        this.bookingForm = response.bookingForm;
        this.registerForm = response.registeredUser;
        debugger
        console.log("bookingForm retrieved!", this.bookingForm);
        console.log("regsiterform retrieved!", this.registerForm);
        debugger
      },
      (error) => {
        console.error('Error getting data:', error);
        debugger
      }
    );
  }
   OnSubmit() {
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
    if (this.newPassword === this.confirmPassword) {
      debugger
      this.http.post('http://localhost:3000/client-dashboard', this.newPassword, {headers : headers}).subscribe(
      (response) => {
        debugger
      console.log('Password change successful!');
      this.router.navigate(['./client-dashboard'])
    },
    (error) => {
      console.error('Error changing password:', error);
      debugger
    }
  );} else {
      console.log('Passwords do not match');
    }
  }


  
}
