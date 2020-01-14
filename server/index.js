const Express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const loginRouter = require('./routers/login/login');
const userRouter = require('./routers/users/index');
const navRouter = require('./routers/nav/index');

const app = new Express();
app.listen(1900);
app.use(cookieParser());

app.use(
  cookieSession({
    name: 'ceshi',
    keys: ['fds', 'afsd', 'fasdfas', 'fd123gs', '123fgdsdf'],
  }),
);

app.use('/', function(req, res) {
  // req.session['ssion_name'] = '测试';
  // console.log(req.session);
  res.send('ceshi');
});

app.use('/api/', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/nav', navRouter);
