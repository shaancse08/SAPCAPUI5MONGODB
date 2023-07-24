const cds = require("@sap/cds");
const mongoose = require("mongoose");
const EmployeeDetailsModel = require("../schema/EmployeeDetails");

const createEmployeeDetails = async (req) => {
  try {
    const oPayload = req.data;
    const oEmployee = new EmployeeDetailsModel(oPayload);
    await oEmployee.save();
    return req.data;
  } catch (error) {
    console.log(error.messsage);
  }
};

module.exports = {
  createEmployeeDetails,
};
