const EmployeeDetailsModel = require("../schema/EmployeeDetails");

const createEmployeeDetails = async (req) => {
  try {
    const oPayload = req.data;
    const oEmployee = new EmployeeDetailsModel(oPayload);
    const {_doc: oNewUser} = await oEmployee.save();
    oNewUser._id = oNewUser._id.toString();
    return oNewUser;
  } catch (error) {
    req.reject(401, error.message);
  }
};

module.exports = {
  createEmployeeDetails,
};
