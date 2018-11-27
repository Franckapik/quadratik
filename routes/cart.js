var express = require('express');
var router = express.Router();

var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});



//*******CONTENU PANIER***********
router.get('/update', function(req, res, next) {
var tp = 0;
var tfdp = 0;

  for (var i = 0; i < req.session.cart.length; i++) {
    tp += req.session.cart[i].price * req.session.cart[i].qty;
    tfdp += req.session.cart[i].fdp * req.session.cart[i].qty;
  }

req.session.cart_total = tp + tfdp - req.session.cart_promo;
req.session.cart_total_produits = tp;
req.session.cart_total_fdp = tfdp;

  res.json({
    cart: req.session.cart,
    total_produits: req.session.cart_total_produits,
    total_FraisDePorts: req.session.cart_total_fdp,
    reduction: req.session.cart_promo,
    amount: req.session.cart_total
  }); //renvoie le contenu du panier.


});

//*******PROMO***********
router.post('/promoCart', function(req, res, next) {

console.log('Code promo :', req.body.promo);

  knex('promo')
    .where('code', req.body.promo)
    .then(reduc => {
        if (reduc.length != 1) {
          res.json({
            error: "Code non valide"
          })
        } else {
          req.session.cart_promo = req.session.cart_total_produits * Number(reduc[0].reduction) / 100;
          console.log('Pourcentage: ', reduc[0].reduction, '%');
          console.log('Reduction de ', req.session.cart_promo, '€');

          res.json({
            success: 'Code promotion ajouté'
          })
        }
      })
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

  if (!req.session.cart) {
    req.session.cart = [];
    req.session.cart_promo = 0;
  }

  var product = {};

  var index = req.session.cart.findIndex(x => x.name == req.body.item_name) //trouve l'index (0,1,2) du produit ajouté au panier
  console.log(index);

  if (index === -1) { //produit inexistant dans le panier
    product.name = req.body.item_name;
    product.price = req.body.item_price;
    product.fdp = req.body.item_packaging;
    product.qty = 1;

    req.session.cart.push(product);
    console.log('Produit ajouté :', req.body.item_name);

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
