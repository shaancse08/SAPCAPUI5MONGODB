using {cap.ui5.mongo as db} from '../db/schema';


@path: '/EmpSRV'
service EmployeeManagement {

    entity EmployeeDetails as projection on db.EmployeeDetails;

}
