const Express = require('express');

const router = Express.Router();

router.get('/add', function(req, res) {
  res.send('add');
});
router.get('/delete', function(req, res) {
  res.send('11');
});

router.get('/update', function(req, res) {
  res.send('22');
});
router.get('/list', function(req, res) {
  res.send('33');
});

module.exports = router;
