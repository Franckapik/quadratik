var express = require('express');
var router = express.Router();
var config = require('../config');
const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);


router.get('/' , (req ,res, next ) => {
  console.log("chargeid", req.session.charge);

  stripe.charges.retrieve(
    req.session.charge,
    function(err, charge) {
      if(charge) {
        console.log(charge.id);
        res.send(charge.id);
      }
      else {
        console.log(err);
      }
    }

  );

})

module.exports = router;
