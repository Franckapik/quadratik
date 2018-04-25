var express = require('express');
var router = express.Router();
var braintree = require('braintree');
var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});


router.post('/', function(req, res, next) {
  var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: config.brain_merchant,
    publicKey: config.brain_pub,
    privateKey: config.brain_private
  });

  // Use the payment method nonce here
  var nonceFromTheClient = req.body.paymentMethodNonce;
  var amount = "'" + req.session.cart_total + "'";
  // Create a new transaction
  var newTransaction = gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true
    }
  }, function(error, result) {
      if (result) {
        console.log('transaction', result.transaction);

        knex('commande')
        .insert({
          userid : req.session.userid,
          status : result.transaction.status,
          mode : result.transaction.paymentInstrumentType,
          amount : result.transaction.amount,
          cardtype : result.transaction.creditCard.cardType,
          number : result.transaction.creditCard.maskedNumber,
          expirationdate : result.transaction.creditCard.expirationDate,
          transactionid : result.transaction.id
        })
        .then(res.send(result));


      } else {
        res.status(500).send(error);
      }
  });
});

router.post('/success', function(req, res, next) {
  var result = JSON.parse(req.body.transactionOK);
});

module.exports = router;
