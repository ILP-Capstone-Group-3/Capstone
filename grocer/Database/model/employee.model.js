const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//Unique in this case does not validate input, it is used internally by mongoose for
//optimization purposes
//For that we install npm install --save mongoose-unique-validator
const employeeSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  userName: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true}
});

//Unique validator does this
employeeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Employee", employeeSchema);
