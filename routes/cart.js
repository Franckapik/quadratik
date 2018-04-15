var express = require('express');
var router = express.Router();

var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

var cart = [];

//renvoie le contenu du panier
router.get('/', function(req, res, next) {

total = 0;
for (var i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].qty;
}

req.session.cart_total = total;
console.log(req.session.cart_total);

res.json ({cart : cart});


});

//ajoute un article au panier
router.post('/', function(req, res, next) {


var product = {};

  var index = cart.findIndex(x => x.name == req.body.item_name) //trouve l'index (0,1,2) du produit ajouté au panier

  if (index === -1) { //nouveau produit ajouté
    product.collection = req.body.item_collection;
    product.name = req.body.item_name;
    product.price = req.body.item_price;
    product.fdp = req.body.item_packaging;
    product.qty = 1;
    cart.push(product);
    console.log('Produit ajouté :', req.body.item_name);
    req.session.cart = cart; //session
    res.json({
      add: product
    })

  } else {

    cart[index].qty++
      console.log('Produit multiplié : ', cart[index].name,'x', cart[index].qty);
      req.session.cart = cart; //session
      res.json({
        add: product
      })
  }





});

//supprime Tout le contenu du panier
router.put('/', function(req, res, next) {
  console.log("Panier effacé");
  cart = [];

  req.session.cart = cart;

});

//supprime un article au panier
router.delete('/:item', function(req, res, next) {

  var index = cart.findIndex(x => x.name == req.params.item) //trouve l'index (0,1,2) du produit ajouté au panier
  console.log(index);

  if (index === -1) { //n'existe pas = pas de supression
  } else {
    cart[index].qty--

      if (cart[index].qty == 0) {
        cart.splice(index, 1);
      }

  }

  req.session.cart = cart; //session

  res.json({
    cart: cart
  })


});

//ajoute le panier à la base de donnée
router.post('/cartToDB', function(req, res, next) {

knex('cart')
.returning('products')
.insert({
  products: cart,
  total: req.session.cart_total,
  sessid: req.session.id
})
.then(products => console.log('Commande en cours: ', products) );

});

//using a writable CTE, which would look like this: WITH ins_user AS (INSERT INTO users (username) VALUES ('John') RETURNING id), ins_cart AS (INSERT INTO carts (user_id, data) SELECT id, 'cart data' FROM ins_user RETURNING *) SELECT * FROM ins_cart;



module.exports = router;
