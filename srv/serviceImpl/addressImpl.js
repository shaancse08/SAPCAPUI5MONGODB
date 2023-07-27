const AddressModel = require("../schema/Address");
const { getTopSkip } = require("../util/util");

const createAddressDetails = async (req) => {
  try {
    const oPayload = req.data;
    const oNewAddress = await createAnAddress(oPayload);
    return oNewAddress;
  } catch (error) {
    req.reject(401, error.message);
  }
};

const getAddressDetails = async (req) => {
  const { columns, from, limit, orderBy } = req.query.SELECT;
  const { _id } = req.data;
  // const aExpands = await getExpands(columns);
  const { top, skip } = await getTopSkip(limit);
  let aData = [];
  // const aResult = [];

  if (from["ref"].length > 0 && _id) {
    aData = await AddressModel.find({ _id: _id }).limit(top).skip(skip);
  } else {
    aData = await AddressModel.find().limit(top).skip(skip);
  }

  return aData;
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
  getAddressDetails,
};
