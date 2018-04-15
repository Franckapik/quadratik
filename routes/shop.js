var express = require('express');
var router = express.Router();

var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

router.get('/', function(req, res, next) {

  knex('product')
  .leftJoin('collection', 'product.collectionId', 'collection.id')
  .innerJoin('product_performances', 'product.performance','product_performances.type')
  .innerJoin('product_modele', 'product.modele','product_modele.cellules')
  .then( shopData =>
    res.render('shop', {
      products : shopData
    }));

});

module.exports = router;
