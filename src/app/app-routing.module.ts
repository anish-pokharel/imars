import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomeComponent } from './home/home.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { SearchComponent } from './search/search.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminRejectedComponent } from './admin-rejected/admin-rejected.component';
import { AdminPendingComponent } from './admin-pending/admin-pending.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'booking-form/:busNumber', component: BookingFormComponent },
  { path: 'booking-confirm', component: BookingConfirmComponent },
  { path: 'bus-details', component: BusDetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'client-dashboard', component: ClientDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'comming-soon', component: CommingSoonComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'admin-accepted', component: AdminDashboardComponent },
  { path: 'admin-rejected', component: AdminRejectedComponent },
  { path: 'admin-pending', component: AdminPendingComponent },
  { path: 'admin-registration', component: AdminRegistrationComponent },
  // { path: 'payment', component: PaymentComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
