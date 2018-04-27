var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var amount = 532456 + parseInt(req.session.userid);
  console.log(amount);
  //req.session.cart_total = null;
  //req.session.cart_items = null;
  res.render('essai');
});

module.exports = router;
