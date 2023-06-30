import { Component } from '@angular/core';

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
  

}

