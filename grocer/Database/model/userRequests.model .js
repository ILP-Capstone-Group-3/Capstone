const mongoose = require('mongoose');

const userRequestsSchema = mongoose.Schema({
	
    userId: { type: String,  required : true},
    userName: { type: String, required: true },
    email : { type: String, required : true},
    description: { type: String, required: true },
    date: { type : Date, required : true}
});


module.exports = mongoose.model('user_requests', userRequestsSchema);