import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  activePage: string = 'home';   // Assuming 'home' is the default active page
  setActivePage(page: string) {
    this.activePage = page;
  }
  constructor(private http: HttpClient) { }

  logOut() {
    this.http.get('/logout').subscribe(
      (response) => {
        console.log('Logout successful', response);
        },
      (error) => {
        console.error('Error logging out', error);
      }
    );

  }

}

