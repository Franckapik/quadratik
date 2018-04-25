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
    .then(function(productData) {
      knex('product_essences')
        .then(function(essencesData) {
          knex('user')
            .then(function(userData) {
              res.render('admin', {
                product: productData,
                essence: essencesData,
                user: userData
              });
            })
        })
    })

});

module.exports = router;
