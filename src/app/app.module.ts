import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { SearchComponent } from './search/search.component';
>>>>>>> 143b0e7db5813988b1aa9f81676c4267d87a204e

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    MainPageComponent,
    HomeComponent,
    BookingFormComponent,
    BookingConfirmComponent,
    BusDetailsComponent,
    FooterComponent,
    ClientDashboardComponent,
    AdminDashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
