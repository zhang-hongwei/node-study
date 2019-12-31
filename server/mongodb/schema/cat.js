const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

const catSchema = mongoose.Schema({
  name: String,
  age: Number,
  createTime: Number,
});

const Catten = mongoose.model('Catten', catSchema);

module.exports = { Catten: Catten };
