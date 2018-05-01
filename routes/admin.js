var express = require('express');
var router = express.Router();
var config = require('../config');
var bcrypt = require('bcrypt');

var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

router.get('/', function(req, res, next) {

  knex('product')
    .leftJoin('collection', 'product.collectionId', 'collection.id')
    .innerJoin('product_performances', 'product.performance', 'product_performances.type')
    .leftJoin('product_colors', 'product.nbColors', 'product_colors.nbcolors')
    .then(function(productData) {
      knex('product_essences')
        .then(function(essencesData) {
          knex('user')
          .innerJoin('cart', 'user.id', 'cart.userid')
          .innerJoin('commande', 'user.id', 'commande.userid')
          .leftJoin('livraison', 'user.id', 'livraison.userid')

            .then(function(userData) {
              res.render('admin', {
                product: productData,
                essence: essencesData,
                user: userData
              })
              .catch(error => console.error('Error:', error));
            })
        })
    })

});



module.exports = router;
