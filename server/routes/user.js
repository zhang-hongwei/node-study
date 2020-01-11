const express = require('express');

const router = express.Router();

router.get('/add', function(req, res) {
  res.send('添加用户');
});

router.get('/update', function(req, res) {
  res.send('更新用户');
});

module.exports = router;
