namespace cap.ui5.mongo;


@cds.persistence.skip: true // Annotation not to create a table for the same once it is deployed
entity EmployeeDetails {
  key _id       : String;
      fName     : String;
      lName     : String;
      DOB       : Date;
      age       : Integer;
      createdAt : DateTime;
      updatedAt : DateTime;
}
