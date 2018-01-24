var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pay_err' , (req ,res, next ) => {
    console.log(req.query);
    res.render('pay_err');
})

module.exports = router;
