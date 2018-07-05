var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('api');
});

router.post('/fenxiao/vcode.json', function(req, res){
  res.send({
    rc: 0,
    tm: 1312412412,
  });
});
router.post('/fenxiao/register.json', function(req, res){
  res.send({
    rc: 0,
    tm: 213123123,
  });
});
router.get('/prizeact/index.json', function(req, res){
  res.send({
    rc: 0,
    chance: 2,
    prizeIds: [
      {Fprizeid: 105},
      {Fprizeid: 104},
      {Fprizeid: 0},
      {Fprizeid: -1}
    ],
    isend: 0,
    haslogin: 0
  });
});
router.post('/prizeact/lottery.json', function(req, res){
  res.send({
    rc: 0,
    res: {
      FprizeId: 101,
    },
    tm: 123123123,
  })
})

module.exports = router;