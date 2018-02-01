var express = require('express');
var router = express.Router();
var config = require('../config');
const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);

var order ={};

router.get('/' , (req ,res, next ) => {


if(req.query.paymentId) { //paypal

  order.paymentId = req.query.paymentId;
  order.token = req.query.token;
  order.PayerID = req.query.PayerID;

  console.log(req.query.paymentId);
  console.log(req.query.token);
  console.log(req.query.PayerID);

  req.session.order = order;
  res.send('Votre commande ' + req.query.paymentId + ' via Paypal a bien été enregistrée')

}


if(req.query.charge_id) { //stripe
//stripe
  stripe.charges.retrieve(
    req.query.charge_id,
    function(err, charge) {
      req.session.cart = [];
      res.render('pay_success', {charge : charge});
    }
  );
}
})

module.exports = router;
