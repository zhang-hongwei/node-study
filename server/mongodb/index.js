const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mock', {
  poolSize: 20,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', err => {
  console.log('error===>', err);
});

db.once('open', () => {
  console.log('数据库连接成功===>');
});

require('./models/user');

exports.User = mongoose.model('User');
