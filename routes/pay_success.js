var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/' , (req ,res, next ) => {
    console.log(req.query);
    res.render('pay_success');
})

module.exports = router;
