var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //req.session.cart_total = null;
  //req.session.cart_items = null;
  res.render('braintree');
});

module.exports = router;
