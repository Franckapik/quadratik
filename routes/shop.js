var express = require('express');
var router = express.Router();

var var12= 'Ici est grosse ma variable';
router.get('/', function(req, res, next) {
  res.render('shop', {variable : var12});
});

module.exports = router;
