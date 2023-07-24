const mongoose = require("mongoose");

/**
 * Address Schema  whihc will be referred to the Address of teh Employee
 */
const AddressSchema = new mongoose.Schema({
  // Street details
  street: {
    type: String,
  },
  //   City Details
  city: {
    type: String,
  },
  //   Pincode Details
  pincode: {
    type: Number,
  },
  //   Landmark details
  landmark: {
    type: String,
  },
  //   Country details
  country: {
    type: String,
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

const AddressModel = mongoose.model("Address", AddressSchema);

module.exports = AddressModel;
