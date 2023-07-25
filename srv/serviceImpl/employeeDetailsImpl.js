const EmployeeDetailsModel = require("../schema/EmployeeDetails");
const { getExpands, getTopSkip } = require("../util/util");

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
 * This method will get all the employee details
 * @param {*} req provided by the framework
 */
const getEmployeeDetails = async (req) => {
  const { columns, from, limit, orderBy } = req.query.SELECT;
  const aExpands = await getExpands(columns);
  const { top, skip } = await getTopSkip(limit);
  const aData = await EmployeeDetailsModel.find()
    .limit(top)
    .skip(skip)
    .populate("address");

    return aData;
};

/**
 * Update Employee Details
 * @param {*} req Provided by the framework
 */
const updateEmployeeDetails = async (req) => {
  // TODO Update the Employee details
};

/**
 * Delete the Employee detail
 * @param {*} req Provided by the Framework
 */
const deleteEmployeeDetails = async (req) => {
  // TODO Delete Employee Details
};

/**
 * Here in this method will create an employee based on the Employee Generation
 * @param {*} oPayload Payload to create an employee
 * @returns
 */
const createAnEmployee = async (oPayload) => {
  const oEmployee = new EmployeeDetailsModel(oPayload);
  const { address__id } = oPayload;
  delete oPayload.address__id;

  const { _doc: oNewUser } = await oEmployee.save();

  if (address__id) {
    await EmployeeDetailsModel.updateOne(
      { _id: oNewUser._id },
      { $push: { address: address__id } }
    );
  }

  oNewUser._id = oNewUser._id.toString();
  return oNewUser;
};

module.exports = {
  createEmployeeDetails,
  getEmployeeDetails,
  deleteEmployeeDetails,
  updateEmployeeDetails,
};
