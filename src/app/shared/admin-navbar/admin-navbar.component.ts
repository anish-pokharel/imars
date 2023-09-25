import { Component , OnInit} from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit{
  token: string = '';
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getTokenFromDatabase(); // Call the method to get the token from the database
  }

  getTokenFromDatabase(): void {
    const token = this.cookieService.get('jwt');
    console.log('Token stored:', token);
    if (!token) {
      console.error('Token not found');
      return;
    }
  }

  logOut() {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set("Authorization", token);
    }
    console.log(headers);
    this.http.get<any>('http://localhost:3000/logout', { headers : headers}).subscribe(
      (response) => {
        console.log('Logout successful', response);
        },
      (error) => {
        console.error('Error logging out', error);
      }
    );
  }

}
