const mongoose = require('mongoose');
const { Catten } = require('./schema/cat');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', err => {
  console.log('error=>', err);
});

db.once('open', () => {
  // const cat1 = new Catten({ name: '测试2',age: 10 });
  // cat1.save(() => {
  //   console.log('保存成功');
  // });
  // console.log('连接成功');
  console.log('查询=>', Catten.find({ name: '测试2' }));
});

// exports.db = db;
