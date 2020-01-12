const Express = require('express');

const router = Express.Router();

router.get('/add', function(req, res) {
  res.send('add');
});
router.get('/delete', function(req, res) {
  res.send('1');
});

router.get('/update', function(req, res) {
  res.send('2');
});
router.get('/list', function(req, res) {
  res.send('3');
});

module.exports = router;
