const Express = require('express');
const { resMsg } = require('../../utils');
const router = Express.Router();

router.use(function(req, res, next) {
  console.log(123);

  next();
});

router.post('/login', function(req, res) {
  // console.log(req);

  res.cookie('_mock_user_', 1, { maxAge: 60 * 1000 });
  res.send(resMsg(1));
});

module.exports = router;
