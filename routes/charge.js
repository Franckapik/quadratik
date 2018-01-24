var express = require('express');
var router = express.Router();
var config = require('../config')
var bodyParser = require('body-parser');


const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post("/", (req, res) => {
  console.log(req.body.nbItems);
  let amount = (req.body.nbItems*100).toFixed(0);;

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
