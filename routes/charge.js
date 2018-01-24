var express = require('express');
var router = express.Router();
var config = require('../config')

const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);

router.post("/", (req, res) => {
  console.log(req.body);
  let amount = 500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken,
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "eur",
         customer: customer.id
    }))
  .then(function(charge){
    if(charge.paid){
       res.render("charge.ejs", { charge });

    }
    else {
 res.send('Erreur de paiment');
    }}
  );
});

module.exports = router;
