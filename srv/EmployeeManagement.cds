using {cap.ui5.mongo as db} from '../db/schema';


@path: '/EmpSRV'
service EmployeeManagement {

    entity EmployeeDetails    as projection on db.EmployeeDetails;
    entity Address            as projection on db.Address;
    entity EmployeeDetailsCap as projection on db.EmployeeDetailsCap;
    entity AddressCap         as projection on db.AddressCap;

}
