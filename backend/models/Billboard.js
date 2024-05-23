const mongoose = require('mongoose');

const billboardSchema = new mongoose.Schema({
  location: String,
  size: String,
  price: Number,
  availability: Boolean,
  owner: String,
});

module.exports = mongoose.model('Billboard', billboardSchema);
