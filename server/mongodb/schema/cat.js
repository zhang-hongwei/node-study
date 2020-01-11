const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
  name: String,
  age: Number,
  createTime: Number,
});

mongoose.model('Catten', catSchema);
