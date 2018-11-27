var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

var type = req.query.type;
res.render('success', {
  type : type
});

});

module.exports = router;
