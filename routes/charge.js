var express = require('express');
var router = express.Router();
var config = require('../config');
var session = require('express-session');


const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);

router.post("/charge", (req, res) => {
  var token = req.body.stripeToken; // Using Express

  // Charge the user's card:
  stripe.charges.create({
    amount: 1000,
    currency: "eur",
    description: "Example charge",
    source: token,
  }, function(err, charge) {
    // asynchronously called
  });
});


module.exports = router;
