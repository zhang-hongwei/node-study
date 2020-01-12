const Express = require('express');
const app = new Express();

const session = require('express-session');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');

const loginRouter = require('./routers/login/login');
const userRouter = require('./routers/users/index');
const navRouter = require('./routers/nav/index');

app.listen(1900);

app.use(cookie('_mock_user_'));

app.use(function(req, res, next) {
  console.log(req.cookies.name);
});

app.use('/api/', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/nav', navRouter);
