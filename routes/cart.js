var express = require('express');
var router = express.Router();
var cart = [];
//renvoie le contenu du panier
router.get('/:item', function(req, res, next) {



});

//ajoute un article au panier
router.post('/', function(req, res, next) {


  var product = {};

  if (cart.indexOf(req.body.item_name) === -1) {
    product.name = req.body.item_name;
    product.price = req.body.item_price;
    product.qty = 0;
    cart.push(product);
  }
  else {
    console.log('exist yet');

  }
  req.session.cart = cart;


  /*var cart = req.session.cart = [];
  if (cart.indexOf(req.body.item_name) === -1)
  cart.push(req.body.item_name);
  else {
    cart.qty++
  }*/

  res.json({
    cart: cart
  })
});

//remplace Tout le contenu du panier
router.put('/', function(req, res, next) {

});

//supprime un article au panier
router.delete('/:id', function(req, res, next) {

});
//supprime TOUT le panier
router.delete('/', function(req, res, next) {

});


//commande le contenu du panier
router.post('/order', function(req, res, next) {

});

router.get('/list', function(req, res, next) {
  var cart = req.session.cart;
  res.text({
    results: cart
  });
});









module.exports = router;
