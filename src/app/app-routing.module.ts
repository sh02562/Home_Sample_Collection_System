import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { NewPatientComponent } from './Modules/new-patient/new-patient.component';
import { BookingTimeSlotComponent } from './Modules/booking-time-slot/booking-time-slot.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new-patient', component: NewPatientComponent },
  { path: 'booking-time-slot', component: BookingTimeSlotComponent },
  // { path: 'auth', loadChildren: () => import(`./Module/auth/auth.module`).then(m => m.AuthModule) },
  // { path: 'customers', canActivate: [AuthGuard], loadChildren: () => import(`./Module/customer/customer.module`).then(m => m.CustomerModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
