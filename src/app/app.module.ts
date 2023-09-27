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
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { PaymentComponent } from './payment/payment.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { AdminAcceptedComponent } from './admin-accepted/admin-accepted.component';
import { AdminRejectedComponent } from './admin-rejected/admin-rejected.component';
import { AdminPendingComponent } from './admin-pending/admin-pending.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AboutPageComponent } from './shared/about-page/about-page.component';
import { ServicesComponent } from './shared/services/services.component';
import { PeekDestinationComponent } from './shared/peek-destination/peek-destination.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { NepaldstinationsComponent } from './nepaldstinations/nepaldstinations.component';




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
    SearchComponent,
    CommingSoonComponent,
    NavbarComponent,
    FooterComponent,
    MainNavComponent,
    PaymentComponent,
    SideMenuComponent,
    AdminNavbarComponent,
    AdminAcceptedComponent,
    AdminRejectedComponent,
    AdminPendingComponent,
    AdminRegistrationComponent,
    AboutPageComponent,
    ServicesComponent,
    PeekDestinationComponent,
    ContactUsComponent,
    NepaldstinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [DatePipe, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
