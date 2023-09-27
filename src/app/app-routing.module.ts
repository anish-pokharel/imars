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
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard] },
  // { path: 'booking-form/:busNumber', component: BookingFormComponent },
  { path: 'booking-form/:BusNumber', component: BookingFormComponent, canActivate: [AuthGuard] },

  { path: 'booking-confirm', component: BookingConfirmComponent, canActivate: [AuthGuard] },
  { path: 'bus-details', component: BusDetailsComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'client-dashboard', component: ClientDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },

  { path: 'comming-soon', component: CommingSoonComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'admin-accepted', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-rejected', component: AdminRejectedComponent, canActivate: [AuthGuard] },
  { path: 'admin-pending', component: AdminPendingComponent, canActivate: [AuthGuard] },
  { path: 'admin-registration', component: AdminRegistrationComponent, canActivate: [AuthGuard] },
  // { path: 'payment', component: PaymentComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
