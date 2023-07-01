import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent {
  busData: any = {}; // Object to store the form data
  constructor(private http: HttpClient,private router: Router) {}
  onSubmit() {
    this.http.post('http://localhost:3000/client-dashboard', this.busData).subscribe(
      (response) => {
        console.log('Bus registered successfully');
        this.router.navigate(['./admin-dashboard']);
        // Perform any additional actions or show a success message
      },
      (error) => {
        console.error('Error registering bus:', error);
        // Handle the error or display an error message
      }
    );
  }
}
