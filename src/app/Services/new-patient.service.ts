import { Injectable } from '@angular/core';
//import { INewPatient } from '../../assets/newPatient';
import { HttpClient } from '@angular/common/http';
import { NewPatient } from 'src/app/Model/newPatient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPatientService {

  patientUrl :string ="http://localhost:3000/patients";
  addressUrl :string ="http://localhost:3000/address";
  
  constructor(private http:HttpClient) { }

  getData():Observable<NewPatient>{
    return this.http.get<NewPatient>(this.patientUrl);
  }


  postPatients(information){
    return this.http.post(this.patientUrl,information);
  } 
  postAddress(information){
    return this.http.post(this.addressUrl,information);
  } 

}
