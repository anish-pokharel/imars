import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomeComponent } from './home/home.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'booking-form', component: BookingFormComponent },
  { path: 'booking-confirm', component: BookingConfirmComponent },
  { path: 'bus-details', component: BusDetailsComponent },
  { path: '**', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
