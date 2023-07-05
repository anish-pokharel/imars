import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/api/service/data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formData: any = {}
  constructor(private router: Router,
    private dataService: DataService
  ) {

  }
  isHovering: boolean = false;
  isSliding: boolean = false;
  showMessage = false;

  ngOnInit(): void {

  }

  showMessagen() {
    this.isHovering = true;
  }
  hideMessagen() {
    this.isHovering = false;
  }
  showMessagee() {
    this.isSliding = true;
  }
  hideMessagee() {
    this.isSliding = false;
  }
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      const value = target.value;
      if (value.trim() !== '') {
        this.showMessage = false;
      } else {
        this.showMessage = true;
      }
    }
  }


  onSubmit() {
    this.dataService.sendMesage(this.formData).subscribe(
      (response) => {
        console.log('Message sent successfully');
        // Reset the form after successful submission
        this.formData = {};
      },
      (error) => {
        console.error('Error sending message:', error);
      }
    );
  }
}



