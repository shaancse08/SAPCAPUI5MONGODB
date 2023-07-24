const EmployeeDetailsModel = require("../schema/EmployeeDetails");

const createEmployeeDetails = async (req) => {
  try {
    const oPayload = req.data;
    const oNewUser = await createAnEmployee(oPayload);
    return oNewUser;
  } catch (error) {
    req.reject(401, error.message);
  }
};

/**
 * Here in this method will create an employee based on the Employee Generation
 * @param {*} oPayload Payload to create an employee 
 * @returns 
 */
const createAnEmployee = async (oPayload) => {
  const oEmployee = new EmployeeDetailsModel(oPayload);
  const { _doc: oNewUser } = await oEmployee.save();
  oNewUser._id = oNewUser._id.toString();
  return oNewUser;
};

module.exports = {
  createEmployeeDetails,
};
