const AddressModel = require("../schema/Address");

const createAddressDetails = async (req) => {
  try {
    const oPayload = req.data;
    const oNewAddress = await createAnAddress(oPayload);
    return oNewAddress;
  } catch (error) {
    req.reject(401, error.message);
  }
};

/**
 * Here in this method will create an employee based on the Employee Generation
 * @param {*} oPayload Payload to create an employee 
 * @returns 
 */
const createAnAddress = async (oPayload) => {
  const oAddress = new AddressModel(oPayload);
  const { _doc: oNewAddress } = await oAddress.save();
  oNewAddress._id = oNewAddress._id.toString();
  return oNewAddress;
};

module.exports = {
  createAddressDetails,
};
