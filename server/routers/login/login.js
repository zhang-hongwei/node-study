const Express = require('express');

const router = Express.Router();

router.get('/login', function(req, res) {
  res.send('login');
});

module.exports = router;
