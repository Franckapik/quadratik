var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/' , (req ,res, next ) => {

    console.log('Session charge:' + req.session.charge);
    res.render('pay_success');
})

module.exports = router;
