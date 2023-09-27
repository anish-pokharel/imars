import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }


  actionDetails() {
    this.router.navigate(['/bus-details'])
  }
  data = {

    "work": [
      {
        "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        "title": "Bus Reaservation",
        "paragraph": "Here you can reerve the Bus.",
        "button": {
          "text": "Book Bus",
        }
      },
      {
        // "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        "image": "https://images.unsplash.com/photo-1602951172321-fe0aa8865e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "title": "Vechicle Option",
        "paragraph": "You can get the Vechicle Option here.",
        "button": {
          "text": "See Option",
        }
      },
      {
        "image": "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        "title": "Seat Booking",
        "paragraph": "This is the Seat Booking Option ",
        "button": {
          "text": "Book Seat",
        }
      }
    ]

  }

  ngOnInit(): void {

  }

  navigateToPage(buttonText: string) {
    if (buttonText === 'Book Bus') {
      this.router.navigate(['/bus-details']);
    } else if (buttonText === 'See Option' || buttonText === 'Book Seat') {
      this.router.navigate(['/comming-soon']);
    }
  }

}
