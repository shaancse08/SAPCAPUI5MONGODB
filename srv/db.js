const { default: mongoose } = require("mongoose");

const connectDataBase = async () => {
  // const S_URL = "mongodb://127.0.0.1:27017/EmpDB";
  const S_URL = "mongodb+srv://shaancse08:LCjEMN9uMcK2qL9C@capuimongo.1c6q0rp.mongodb.net/EmpDB";
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
