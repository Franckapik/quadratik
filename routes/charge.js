var express = require('express');
var router = express.Router();
var config = require('../config');

const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);

router.post("/charge", (req, res) => {
  var token = req.body.token; // Using Express
  var amount = req.body.amount;
  console.log(token);

  // Charge the user's card:
  stripe.charges.create({
    amount: amount,
    currency: "eur",
    description: "Example charge",
    source: token.id,
  }, function(err, charge) {
    req.session.charge = charge.id;
    res.json({res : charge.id});
  });
});


module.exports = router;
