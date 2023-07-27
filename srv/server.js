const cds = require("@sap/cds");
const cov2ap = require("@sap/cds-odata-v2-adapter-proxy");
const { connectDataBase } = require("./db");
connectDataBase();
cds.on("bootstrap", (app) => app.use(cov2ap()));
module.exports = cds.server;
