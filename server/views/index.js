const ejs = require('ejs');

ejs.renderFile('./index.ejs', { name: 'zhang', ary: [1, 2, 3, 4, 5] }, {}, function(err, str) {
  // str => 输出绘制后的 HTML 字符串
  if (err) {
    console.log(err);
  } else {
    console.log(str);
  }
});
