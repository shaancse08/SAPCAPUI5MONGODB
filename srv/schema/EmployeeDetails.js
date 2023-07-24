const { default: mongoose } = require("mongoose");

const employeeDetailsSchema = new mongoose.Schema({
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const EmployeeDetailsModel = mongoose.model(
  "EmployeeDetails",
  employeeDetailsSchema
);

module.exports = EmployeeDetailsModel;
