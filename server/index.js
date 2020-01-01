const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
// const ejs = require('ejs');

// body-parser
const server = express();
const ary = [];
for (let i = 0; i < 1000; i += 1) {
  ary.push(`keys_${Math.random()}_${new Date().getTime()}`);
}
server.use(cookieParser('fdsfjhsa23iu4ljmkxcnzchaghsdf23uy4ifdsk'));
server.use(
  cookieSession({
    keys: ary,
    name: 'sin',
  }),
);

server.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

server.get('/', function(req, res) {
  res.send('结束');
});
server.listen(9000);
