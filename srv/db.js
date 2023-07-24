const { default: mongoose } = require("mongoose");

const connectDataBase = async () => {
  const S_URL = "mongodb://127.0.0.1:27017/EmpDB";
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
