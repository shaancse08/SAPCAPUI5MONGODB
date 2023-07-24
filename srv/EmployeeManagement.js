const cds = require("@sap/cds");
const { createEmployeeDetails } = require("./serviceImpl/employeeDetailsImpl");
const { createAddressDetails } = require("./serviceImpl/addressImpl");


module.exports = cds.service.impl(async (srv) => {
    srv.on("CREATE", "EmployeeDetails", createEmployeeDetails);
    srv.on("CREATE", "Address", createAddressDetails);
})