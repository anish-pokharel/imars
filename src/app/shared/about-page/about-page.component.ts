import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  team: any[] = [
    {
      name: 'Anish Pokharel',
      title: 'FOUNDER',
      quote: 'Stay Hungry Stay foolish',
      image: '../assets/img/user/anishimars 1.jpg',
      social: [
        { icon: 'fab fa-facebook-f fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-twitter fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-google-plus-g fa-lg fa-fw', link: '#' }
      ]
    },
    {
      name: 'Rudra Nahawang Pandey,',
      title: 'Co-FOUNDER',
      quote: '191720',
      image: '../assets/img/user/rudiimars 1.jpg',
      social: [
        { icon: 'fab fa-facebook-f fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-twitter fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-google-plus-g fa-lg fa-fw', link: '#' }
      ]
    },
    {
      name: 'Ishan Subedi,',
      title: 'Co-FOUNDER',
      quote: '191710',
      image: '../assets/img/user/ishanimars 1.jpg',
      social: [
        { icon: 'fab fa-facebook-f fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-twitter fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-google-plus-g fa-lg fa-fw', link: '#' }
      ]
    },
    {
      name: 'Menuka Lamsal,',
      title: 'Co-FOUNDER',
      quote: '191712',
      image: '../assets/img/user/meukaimars 1.jpg',
      social: [
        { icon: 'fab fa-facebook-f fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-twitter fa-lg fa-fw', link: '#' },
        { icon: 'fab fa-google-plus-g fa-lg fa-fw', link: '#' }
      ]
    },
  ];
}
