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
        "image": "https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp",
        "title": "Bus Reaservation",
        "paragraph": "This is the Bud reservation.",
        "button": {
          "text": "Book Bus",
        }
      },
      {
        "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        "title": "Entry 2",
        "paragraph": "This is the second entry.",
        "button": {
          "text": "Read More",
        }
      },
      {
        "image": "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        "title": "Entry 3",
        "paragraph": "This is the third entry.",
        "button": {
          "text": "Read More",
        }
      }
    ]

  }

  ngOnInit(): void {

  }

  navigateToPage(buttonText: string) {
    if (buttonText === 'Book Bus') {
      this.router.navigate(['/bus-details']);
    } else if (buttonText === 'Read More' || buttonText === 'Read More2') {
      this.router.navigate(['/comming-soon']);
    }
  }

}
