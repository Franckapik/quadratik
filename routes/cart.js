var express = require('express');
var router = express.Router();

var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

var cart = [];
var promo = 0;

//*******CONTENU PANIER***********
router.get('/update', function(req, res, next) {

console.log(req.session.cart);

if (!req.session.cart || req.session.cart.length == 0 ) {
  req.session.cart_total_produits = 0;
  req.session.cart_total_fdp = 0;
  req.session.cart_promo = 0;
  req.session.cart_total = 0;
  req.session.cart = [];
  console.log('Panier créé', req.session.cart.length);
}

  for (var i = 0; i < req.session.cart.length; i++) {
    req.session.cart_total_produits += req.session.cart[i].price * req.session.cart[i].qty;
    req.session.cart_total_fdp += req.session.cart[i].fdp * req.session.cart[i].qty;
    req.session.cart_total = req.session.cart_total_produits + req.session.cart_total_fdp - req.session.cart_promo;
  }


/*
  if (req.session.cart_promo) {
    promo = req.session.cart_promo
  }

  for (var i = 0; i < cart.length; i++) {
    total_produits += cart[i].price * cart[i].qty;
    total_fdp += cart[i].fdp * cart[i].qty;
    total = total_produits + total_fdp - promo;
  }

  //enregistrement dans la session
  req.session.cart_total_produits = total_produits;
  req.session.cart_total_fdp = total_fdp;
  req.session.cart_total = total;
*/
  res.json({
    cart: req.session.cart,
    total_produits: req.session.cart_total_produits,
    total_FraisDePorts: req.session.cart_total_fdp,
    amount: req.session.cart_total
  }); //renvoie le contenu du panier.


});

//*******PROMO***********
router.post('/promoCart', function(req, res, next) {

  console.log('ici', req.body.promo);

  knex('promo')
    .where('code', req.body.promo)
    .then(reduc => {
      console.log(reduc);
        if (reduc.length != 1) {
          res.json({
            error: "Code non valide"
          })
        } else {
          console.log(promo);
          req.session.cart_promo = req.session.cart_total_produits * Number(reduc[0].reduction) / 100;

          console.log('promo', req.session.cart_promo);
          console.log(reduc[0].reduction);
          res.json({
            success: reduc
          })
        }
      })


/*

  total_produits = 0; //variables globales
  total_fdp = 0;
  total=0;

  for (var i = 0; i < cart.length; i++) {
    total_produits += cart[i].price * cart[i].qty;
    total_fdp += cart[i].fdp * cart[i].qty;
    total = total_produits + total_fdp;
  }

  //enregistrement dans la session
  req.session.cart_total_produits = total_produits;
  req.session.cart_total_fdp = total_fdp;
  req.session.cart_total = total;

  res.json({
    cart: cart,
    total_produits :total_produits,
    total_FraisDePorts : total_fdp,
    amount : total
  }); //renvoie le contenu du panier.

*/
});

router.get('/DBtocart', function(req, res, next) {

  knex('cart')
    .where('sessid', req.session.id)
    .then(DBcart => res.json({
      panier: DBcart
    }));



});

//*********AJOUT******
router.post('/add', function(req, res, next) {


  var product = {};

  var index = req.session.cart.findIndex(x => x.name == req.body.item_name) //trouve l'index (0,1,2) du produit ajouté au panier
  console.log(index);

  if (index === -1) { //produit inexistant dans le panier
    product.name = req.body.item_name;
    product.price = req.body.item_price;
    product.fdp = req.body.item_packaging;
    product.qty = 1;

    console.log('product', product);
    req.session.cart.push(product);
    console.log('panier', req.session.cart);
    console.log('Produit ajouté :', req.body.item_name);

    //enregistrement dans la session
    //req.session.cart = cart;

    res.json({
      add: product
    })

  } else { //produit multiplié

    req.session.cart[index].qty++
      console.log('Produit multiplié : ', req.session.cart[index].name, 'x', req.session.cart[index].qty);

    //enregistrement dans la session
    console.log('cart:', req.session.cart);
    //req.session.cart = cart;

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



//using a writable CTE, which would look like this: WITH ins_user AS (INSERT INTO users (username) VALUES ('John') RETURNING id), ins_cart AS (INSERT INTO carts (user_id, data) SELECT id, 'cart data' FROM ins_user RETURNING *) SELECT * FROM ins_cart;



module.exports = router;
