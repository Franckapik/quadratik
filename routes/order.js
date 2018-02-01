var express = require('express');
var router = express.Router();
var modele = require('../model');

router.post('/user', function(res,res,next){
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      nom: req.body.nom,
      prenom: req.body.prenom,
      adresse: req.body.adresse,
      ville: req.body.ville,
      region: req.body.region,
      postal: req.body.codepostal,
      mail: req.body.mail,
      telephone: req.body.telephone,
      utilisation: req.body.utilisation
    });
  });



});










/*
var cart = [];
//renvoie le contenu du panier
router.get('/', function(req, res, next) {

res.json ({cart : cart});


});

//ajoute un article au panier
router.post('/', function(req, res, next) {


  var product = {};

  var index = cart.findIndex(x => x.name == req.body.item_name) //trouve l'index (0,1,2) du produit ajouté au panier

  if (index === -1) { //nouveau produit ajouté
    product.name = req.body.item_name;
    product.price = req.body.item_price;
    product.qty = 1;
    cart.push(product);
  } else {
    cart[index].qty++
      console.log('exist yet');

  }

  req.session.cart = cart; //session

  res.json({
    add: product
  })

});

//remplace Tout le contenu du panier
router.put('/', function(req, res, next) {

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


//commande le contenu du panier
router.post('/checkin', function(req, res, next) {
console.log( req.body);

});

router.get('/list', function(req, res, next) { //envoie le panier de la session
  var cart = req.session.cart;
  res.json({cart : cart});
});


*/

module.exports = router;
