var express = require('express');
var router = express.Router();
var config = require('../config');
const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);


router.get('/' , (req ,res, next ) => {

  stripe.charges.retrieve(
    req.query.charge_id,
    function(err, charge) {
      console.log(charge.id);
      res.render('pay_success', {charge});
    }
  );
})

module.exports = router;
