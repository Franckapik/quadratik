var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('sessionID :' + req.sessionID);

  res.render('shop');
});

module.exports = router;
