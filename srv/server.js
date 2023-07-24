const cds = require("@sap/cds");
const { connectDataBase } = require("./db");
connectDataBase();
module.exports = cds.server;
