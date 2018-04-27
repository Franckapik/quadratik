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
  //Connection avec Braintree
  var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: config.brain_merchant,
    publicKey: config.brain_pub,
    privateKey: config.brain_private
  });

  // Methode de paiement
  var nonceFromTheClient = req.body.paymentMethodNonce;
  //Montant de la transaction
  var amount = parseInt(req.session.cart_total, 10).toFixed(2);

  //Creation du client Braintree
  knex('user')
    .where('id', req.session.userid)
    .then(user => {

        gateway.customer.create({
          firstName: user[0].prenom,
          lastName: user[0].nom,
          email: user[0].mail,
          phone: user[0].telephone
        }, function(err, result) {
          if (result.success) {
            console.log(result.success);
            console.log(result.customer.id);
          } else {
            console.log(err);
          }

        });
      }

    );

  // Create a new transaction
  var newTransaction = gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, function(error, result) {
    if (result) {
      console.log('transaction', result.transaction);

  //Enregistrement Base de donnée
      knex('commande')
        .returning('reference')
        .insert({
          userid: req.session.userid,
          status: result.transaction.status,
          mode: result.transaction.paymentInstrumentType,
          amount: result.transaction.amount,
          cardtype: result.transaction.creditCard.cardType,
          number: result.transaction.creditCard.maskedNumber,
          expirationdate: result.transaction.creditCard.expirationDate,
          reference: 532456 + parseInt(req.session.userid),
          transactionid: result.transaction.id
        })
        .then(reference => {
          req.session.cart_total_produits = 0;
          req.session.cart_total_fdp = 0;
          req.session.cart_total = 0;
          res.json({
            result: result,
            reference: reference
          })
        });

    } else {
      res.status(500).send(error);
    }
  });
});

router.post('/success', function(req, res, next) {
  var result = JSON.parse(req.body.transactionOK);
});

module.exports = router;
