var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/' , (req ,res, next ) => {
   
    var chargeSession = req.session.charge;
    res.render('pay_success', {chargeSession});
})

module.exports = router;
