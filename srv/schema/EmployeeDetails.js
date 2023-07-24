const { default: mongoose } = require("mongoose");

// Generating the Schema
const employeeDetailsSchema = new mongoose.Schema({
  // First name which is String
  fName: {
    type: String,
  },
  // Last Name String
  lName: {
    type: String,
  },
  // Date Of Birth Of the EMployee
  DOB: {
    type: Date,
  },
  // Email of the Employee and Validating the Email Format anf Email has to be Unique
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (sEmail) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sEmail);
      },
      message: "Please enter a valid email address",
    },
  },
  // Phone Number of the Employee and Validating the Phone Number Format anf Phone Number has to be Unique
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (iPhoneNumber) => {
        return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(iPhoneNumber);
      },
      message: "Please enter a valid phone number",
    },
  },
  // Age we are calculating teh Age Dnamically in the Set Property
  age: {
    type: Number,
    default: 0,
    set: function () {
      const today = new Date();
      const oBirthDate = new Date(this.DOB);
      const age =
        today.getFullYear() -
        oBirthDate.getFullYear() -
        (today.getMonth() < oBirthDate.getMonth() ||
          (today.getMonth() === oBirthDate.getMonth() &&
            today.getDate() < oBirthDate.getDate()));
      return age;
    },
  },
  // Created At this is Automatically adding the creation date
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  // Updated At Automatically addition happening
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
