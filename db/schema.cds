namespace cap.ui5.mongo;


@cds.persistence.skip: true // Annotation not to create a table for the same once it is deployed
entity EmployeeDetails {
  key _id         : String;
      fName       : String;
      lName       : String;
      DOB         : Date;
      age         : Integer;
      email       : String;
      phoneNumber : Integer64;
      createdAt   : DateTime;
      updatedAt   : DateTime;
      address     : Association to many Address;
      address1    : Association to many Address;
}


@cds.persistence.skip: true
entity Address {
  key _id      : String;
      street   : String;
      city     : String;
      country  : String;
      pincode  : Integer;
      landmark : String;
}

entity EmployeeDetailsCap {
  key ID          : UUID;
      fName       : String;
      lName       : String;
      DOB         : Date;
      age         : Integer;
      email       : String;
      phoneNumber : Integer64;
      createdAt   : DateTime;
      updatedAt   : DateTime;
      address     : Association to many Address;
      address1    : Association to many Address;
}


entity AddressCap {
  key ID       : UUID;
      street   : String;
      city     : String;
      country  : String;
      pincode  : Integer;
      landmark : String;
}
