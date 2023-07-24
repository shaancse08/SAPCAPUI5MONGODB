const cds = require("@sap/cds");
const { createEmployeeDetails } = require("./serviceImpl/employeeDetailsImpl");


module.exports = cds.service.impl(async (srv) => {
    srv.on("CREATE", "EmployeeDetails", createEmployeeDetails)
})