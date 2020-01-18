const express = require('express');
const cookie = require('cookie-parser');
const cookieSession = require('cookie-session');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

const loginRouter = require('./routers/login/login');
const userRouter = require('./routers/users/index');
const navRouter = require('./routers/nav/index');

require('./mongodb/index');

const app = express();
app.listen(1900);
app.use(bodyParser.json());

app.use(cookie());

app.use(
  expressSession({
    name: 'my-session-name', // 这里是cookie的name，默认是connect.sid
    secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
    resave: true,
    saveUninitialized: false,
  }),
);

app.use('/', function(req, res, next) {
  console.log(req.body);
  next();
});

app.use('/api/', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/nav', navRouter);
