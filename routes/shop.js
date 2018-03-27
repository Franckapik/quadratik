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
  .innerJoin('modele', 'product.modeletype','modele.type')
  .then( shop =>
    res.render('shop', {
      data : shop
    }));

});

module.exports = router;
