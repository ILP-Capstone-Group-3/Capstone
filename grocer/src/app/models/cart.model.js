const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  id: { type: String, required: true},
  title: { type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  image: {type: String, required: true},
  rating: {type:String, required:true},
  
});

module.exports = mongoose.model('Cart', cartSchema);