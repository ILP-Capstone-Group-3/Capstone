const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;


//Unique in this case does not validate input, it is used internally by mongoose for
//optimization purposes
//For that we install npm install --save mongoose-unique-validator
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  userName: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  paymentMethods: { type: Number, required: false},
  shippingAddresses: { type: Array, required: false},
  numAttempts: { type: Number, required: false },
  phoneNumber: { type: Number, required: false },
  dateOfBirth: {type:Date, required: true},
  cart: {
    items: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        }
    ]
  }

});

//Unique validator does this
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
