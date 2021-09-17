const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//Unique in this case does not validate input, it is used internally by mongoose for
//optimization purposes
//For that we install npm install --save mongoose-unique-validator
const orderSchema = mongoose.Schema({
  _userId : { type: String, required: true},
  date : { type: Date, required: true},
  status : { type: String, required: true },
  email: { type: String, required: true},
  userName: { type: String, required: true},
  orderItems : { type: Array, required: true}
});

//Unique validator does this
orderSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Order", orderSchema);
