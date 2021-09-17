const mongoose = require('mongoose');

const productIncreaseSchema = mongoose.Schema({
  name: { type: String, required: true},
  requestToIncreaseQuantity: {type:Number, required:false},
});

module.exports = mongoose.model('ProductSendRequests', productIncreaseSchema);