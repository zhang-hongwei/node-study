const Express = require('express');
const app = new Express();
const loginRouter = require('./routers/login/login');
const userRouter = require('./routers/users/index.js');
const navRouter = require('./routers/nav/index.js');

app.listen(1900);

app.use(loginRouter);
app.use('/user', userRouter);
app.use('/nav', navRouter);
