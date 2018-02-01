var express = require('express');
var router = express.Router();
var config = require('../config')
var paypal = require('paypal-rest-sdk');

// configure paypal with the credentials you got when you created your paypal app
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': config.paypal_id,
  'client_secret': config.paypal_secret
});

//PAYPAL



// start payment process
router.get('/', (req, res) => {
  // create payment object
  var payment = {
    "intent": "authorize",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3001/pay_success",
      "cancel_url": "https://www.quadratik.fr/pay_err"
    },
    "transactions": [{
      "amount": {
        "total": 39.00,
        "currency": "USD"
      },
      "description": " a book on mean stack "
    }]
  }


  // call the create Pay method
  createPay(payment)
    .then((transaction) => {

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
      res.redirect('/pay_err');
    });
});

// helper functions
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


module.exports = router;
