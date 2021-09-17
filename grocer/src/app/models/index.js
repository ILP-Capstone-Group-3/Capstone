// Call the collection of databases
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// Add each database model below in similar fashion
db.users = require("./user.model.js")(mongoose);
db.employees = require("./employee.model.js")(mongoose);
db.reports = require("./report.model.js")(mongoose);
db.orders = require("./order.model.js")(mongoose);
db.products = require("./product.model.js")(mongoose);

module.exports = db;
