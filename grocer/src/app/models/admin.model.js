const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//Unique in this case does not validate input, it is used internally by mongoose for
//optimization purposes
//For that we install npm install --save mongoose-unique-validator
const AdminSchema = mongoose.Schema({
    _id: Number,
    username: String,
    userId: String,
    password: String
});

let AdminModel = mongoose.model("", AdminSchema, "admins");
module.exports = AdminModel;