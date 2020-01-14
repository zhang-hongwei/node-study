const Express = require('express');
const app = new Express();

const cookie = require('cookie-parser');
const cookieSession = require('cookie-session');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

const loginRouter = require('./routers/login/login');
const userRouter = require('./routers/users/index');
const navRouter = require('./routers/nav/index');

app.listen(1900);
app.use(cookie());

app.use(
  expressSession({
    name: 'my-session-name', // 这里是cookie的name，默认是connect.sid
    secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
    resave: true,
    saveUninitialized: false,
  }),
);

app.use(function(req, res, next) {
  res.cookie('name', 'ceshi');
  if (req.session.isFirst) {
    console.log(req.session);
  } else {
    req.session.isFirst = 1;
    res.cookie('name1', 'ceshiset');
    res.cookie('name2', 'ceshiset');
    res.cookie('name3', 'ceshiset');
  }

  res.send('测试');
  // next();
});

app.use('/api/', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/nav', navRouter);
