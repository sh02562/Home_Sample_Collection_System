import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPatientComponent } from './Modules/new-patient/new-patient.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NewPatientService } from '../app/Services/new-patient.service';
import { HomeComponent } from './Modules/home/home.component';
import { BookingTimeSlotComponent } from './Modules/booking-time-slot/booking-time-slot.component';



@NgModule({
  declarations: [
    AppComponent,
    NewPatientComponent,
    HomeComponent,
    BookingTimeSlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    
    HttpClientModule
  ],
   providers: [NewPatientService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }
