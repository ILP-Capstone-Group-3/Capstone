const mongoose = require('mongoose');

const employeeRequestsSchema = mongoose.Schema({
    username: { type: String, required: true },
    productID: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
});

module.exports = mongoose.model('employees_requests', employeeRequestsSchema);