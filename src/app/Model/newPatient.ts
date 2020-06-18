

export class Address {
    public id: number;
    public address_line1: string;
    public address_line2: string;
    public landmark: string;
    public street: string;
    public city: string;
    public pincode: number;
    public state: string;
    public country: string;
}

export class Patient {
    public id: number;
    public salutation: string;
    public first_name: string;
    public surname: string;
    public age: string;
    public mobile_number: number;
    public email: string;
    public gender: string;
    public birth_date: string;
    public address: Address[];
}

export class NewPatient {
    public patients: Patient[];
}



