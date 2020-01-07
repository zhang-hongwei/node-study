const mongoose = require('mongoose');

const { Catten } = require('./schema/cat');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', err => {
  console.log('error=>', err);
});

db.once('open', () => {
  console.log('查询=>', Catten.find({ name: '测试2' }));
});
