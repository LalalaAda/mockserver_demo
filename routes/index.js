var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

router.get('/clockin', function(req, res) {
  res.send('xxx');
});


module.exports = router;