import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
constructor(private router: Router){
 
}
isHovering: boolean = false;
isSliding: boolean =false;
showMessage=false;



showMessagen() {
  this.isHovering = true;
}
hideMessagen() {
  this.isHovering = false;
}
showMessagee() {
  this.isSliding= true;
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


}



