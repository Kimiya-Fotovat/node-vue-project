const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({

  userId: { type: String, required: true },
  cart: { type: Array, required: true },
  
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }

}) 

module.exports = mongodb.model('Order', orderSchema);