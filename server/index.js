const Express = require('express');

const app = new Express();

const userRouter = require('./routes/user');

app.listen(9000);

app.use('/user', userRouter);

// app.get('/user', function(req, res) {
//   console.log(req.params);
// });

// app.get('/upload', function(req, res) {
//   console.log(req.params);
// });

// app.all('*', function(req, res) {
//   res.end('404');
// });
