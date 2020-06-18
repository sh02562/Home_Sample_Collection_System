import { Component, OnInit } from '@angular/core';
import { NewPatient, Patient , Address } from '../../Model/newPatient';
//import { INewPatient } from './assets/newPatient';
import { NewPatientService } from '../../Services/new-patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  salutations: string[] = ["Miss", "Mrs", "Mr", "Master"];
  citys: string[] = ["Mumbai", "Pune", "Nagpur"];
  states: string[] = ["Maharashtra"];
  countrys: string[] = ["India"];
  gender: string = "Female";
  birthdate: string;
  age: number;

  // model:any = {}; model= new NewPatient();
   patients: Patient = new Patient();
   address: Address = new Address();
  public model: NewPatient = new NewPatient(); 

  myModel: any = {};
  submitFlag: boolean = true;

  constructor(public patientService: NewPatientService) { }

  ngOnInit(): void { }

  onSubmit(patientForm) {
    //alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.patients);
    console.table(this.address);   
   this.patientService.postPatients(this.patients).subscribe(data => { console.log(data) });
    this.patientService.postAddress(this.address).subscribe(data => { console.log(data) });
    patientForm.reset();
  }

  public setGender(salutation): void {
    console.log("salutation", salutation);
    if (salutation == "Miss" || salutation == "Mrs") {
      this.patients.gender = "Female";
    }
    if (salutation == "Mr" || salutation == "Master") {
      this.patients.gender = "Male";
    }
  }

  public calculateAge(): void {
    if (this.patients.birth_date) {
      var timeDiff = Math.abs(Date.now() - new Date(this.patients.birth_date).getTime());
      this.patients.age = (Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)).toString();
    }
  }

}
