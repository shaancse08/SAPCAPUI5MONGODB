const cds = require("@sap/cds");
const {
  createEmployeeDetails,
  getEmployeeDetails,
  updateEmployeeDetails,
  deleteEmployeeDetails,
} = require("./serviceImpl/employeeDetailsImpl");
const { createAddressDetails } = require("./serviceImpl/addressImpl");

module.exports = cds.service.impl(async (srv) => {
  srv.on("CREATE", "EmployeeDetails", createEmployeeDetails);
  srv.on("READ", "EmployeeDetails", getEmployeeDetails);
  srv.on("UPDATE", "EmployeeDetails", updateEmployeeDetails);
  srv.on("DELETE", "EmployeeDetails", deleteEmployeeDetails);
  srv.on("CREATE", "Address", createAddressDetails);
});
