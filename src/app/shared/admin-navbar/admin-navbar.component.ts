import { Component , OnInit} from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit{
  token: string = '';
  constructor(private http: HttpClient, private cookieService: CookieService,private router: Router) { }

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
    const token = this.cookieService.get('jwt');

    if (!token) {
      console.error('Token not found');
      return;
    }
    this.http.get<any>('http://localhost:3000/logout',{withCredentials:true}).subscribe(
      (response) => {
        this.router.navigate(['./home-page']);
        console.log('Logout successful', response);
        },
      (error) => {
        console.error('Error logging out', error);
      }
    );
  }

}
