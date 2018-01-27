var express = require('express');
var router = express.Router();
var config = require('../config');
var session = require('express-session');

const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);

router.post("/charge", (req, res) => {
  let amount = 500;
 console.log(req.body.id);
  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "usd",
      customer: customer.id
    }))
  .then(
    (charge) => {

      req.session.charge = charge;
      req.session.save(() => res.redirect('/pay_success'));
      
    })
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"});
  });
});

module.exports = router;
