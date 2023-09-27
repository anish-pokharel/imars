import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';



@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  token: string = '';
  activePage: string = 'home';   // Assuming 'home' is the default active page
  setActivePage(page: string) {
    this.activePage = page;
  }
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.getTokenFromDatabase(); // Call the method to get the token from the database
  }

  getTokenFromDatabase(): void {
    const token = this.cookieService.get('jwt');
    debugger
    console.log('Token stored:', token);
    debugger
    if (!token) {
      console.error('Token not found');
      return;
    }
    debugger
  }

  logOut() {
    debugger
    const token = this.cookieService.get('jwt');
    debugger
    if (!token) {
      console.error('Token not found');
      return;
    }
    debugger
    this.http.get<any>('http://localhost:3000/logout', { withCredentials: true }).subscribe(
      (response) => {
        this.router.navigate(['./home-page']);
        console.log('Logout successful', response);
        alertify.success('Success message');

      },
      (error) => {
        console.error('Error logging out', error);
        alertify.error('Error message');

      }
    );
    debugger
  }

}

