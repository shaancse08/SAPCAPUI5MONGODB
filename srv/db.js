const { default: mongoose } = require("mongoose");

const connectDataBase = async () => {
  // const S_URL = "mongodb://127.0.0.1:27017/EmpDB";
  const S_URL = "mongodb+srv://aviksaha0104:JlxnPOr6CoTXBwhp@capmui.1tmshjf.mongodb.net/EmpDB";
  try {
    await mongoose.connect(S_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    connectDataBase
}
