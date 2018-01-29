var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('sessionID :' + req.sessionID);
  
  var cart = req.session;

  req.io.on('connection', function(socket) {

    console.log('Un client est connecté !');

    socket.on('cart', function(obj) {

      cart.cart_total = obj.total;
      cart.cart_articles = obj.articles;

      console.log(cart);
    //console.log(req.session.total);
    //console.log('Panier : ' + sessionUser.total + " | " + sessionUser.items);
    })

    socket.on('token', function(token_id) {
      console.log(token_id);

      stripe.charges.create({
        amount: cart.total,
        currency: "eur",
        description: "Example charge",
        source: token_id
      }, function(err, charge) {
        console.log(err);
        console.log(charge);
        socket.emit('redirect', charge);


      });


    });
  });


  res.render('shop', {data:req.session.cart_total});

});

module.exports = router;
