var express = require('express');
var router = express.Router();
var config = require('../config');
var paypal = require('paypal-rest-sdk');

var braintree = require("braintree");

//**********************BRAINTREE
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: config.brain_merchant,
  publicKey: config.brain_pub,
  privateKey: config.brain_private
});

//***********************************

//*********************braintree

//get a token
router.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

router.post("/checkout", function (req, res) {
  var nonceFromTheClient = req.body.payment_method_nonce;
  // Use payment method nonce here
  gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: "fake-valid-nonce",
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
  });

});




//*********************Configuration
const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);
//
paypal.configure({
  'mode': 'live', //sandbox or live
  'client_id': config.paypal_id,
  'client_secret': config.paypal_secret
});

//*********************Stripe


router.post("/stripe", (req, res) => {
  var token = req.body.token; // Using Express
  var amount = req.body.amount;
  // Charge the user's card:
  stripe.charges.create({
    amount: amount,
    currency: "eur",
    description: "Diffuseurs acoustiques Quadratik.fr",
    source: token.id,
  }, function(err, charge) {
    if (charge.paid) {
      Commande.sync()
        .then(() => {

          return Commande.create({
            transaction: 'Stripe',
            montant: charge.amount,
            tokenID: token.id,
            chargeID: charge.id,
            statut: charge.outcome.seller_message,
            time: new Date(),
            cardID: charge.source.id,
            typeCarte: charge.source.brand,
            chiffres: charge.source.last4

          });
        });

      req.session.charge = charge.id;
      res.json({chargeID : charge.id});
    }
    else {
      console.log(err);
    }

  });
});

//*************************PayPal

// start payment process
router.get('/paypal', (req, res) => {
  // create payment object
  console.log(req.session.cart_total);
  var payment = {
    "intent": "authorize",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3001/charge/paypal_success",
      "cancel_url": "http://localhost:3001/charge/paypal_error"
    },
    "transactions": [{
      "amount": {
        "total": req.session.cart_total,
        "currency": "EUR"
      },
      "description": "Diffuseurs acoustiques Quadratik.fr"
    }]
  }

  // call the create Pay method
  createPay(payment)
    .then((transaction) => {
console.log(transaction);

      var id = transaction.id;
      var links = transaction.links;
      var counter = links.length;
      while (counter--) {
        if (links[counter].method == 'REDIRECT') {
          // redirect to paypal where user approves the transaction
          return res.redirect(links[counter].href)
        }
      }
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.details);
      res.redirect('/pay_err');
    });
});

// creation de la fonction de paiment
var createPay = (payment) => {
  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, function(err, payment) {
      if (err) {
        reject(err);
      } else {
        resolve(payment);
      }
    });
  });
}

router.get('/paypal_success' , (req ,res, next ) => {

  var paymentID = req.query.paymentId;
  var tokenID = req.query.token;
  var PayerID = req.query.PayerID;
  Commande.sync()
    .then(() => {

      return Commande.create({
        transaction: 'Paypal',
        montant: req.session.cart_total, //changer
        tokenID: req.query.token,
        chargeID: req.query.paymentId,
        statut: 'Paiement accepté',
        time: new Date(),
        cardID: req.query.PayerID

      });
    });

  res.send('Votre commande ' + req.query.paymentId + ' via Paypal a bien été enregistrée')


})

router.get('/paypal_error' , (req ,res, next ) => {
  Commande.sync()
    .then(() => {

      return Commande.create({
        transaction: 'Paypal',
        montant: req.session.cart_total, //changer
        statut: 'Paiement refusé',
        time: new Date()

      });
    });

  res.send('Une erreur de transaction est intervenue')


})
//***********************

module.exports = router;
