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
    .innerJoin('product_performances', 'product.performance', 'product_performances.type')
    .then(shopData => {
      var collections = new Map();
      shopData.forEach(product => {
        //Get the array associated with this collection id
        var currentCollection = collections.get(product.collectionId);

        //If there is no array for this value yet, create it.
        if (currentCollection == null) {
          currentCollection = [];
          collections.set(product.collectionId, currentCollection);
        }

        //Place the current product into the array
        currentCollection.push(product);
      })

      //The map will now contain an array for each collectionid, which again contains an array with its items
      var collectionsArray = [];
      collections.forEach((products, collectionid, map) => {
        collectionsArray.push(products);
      })
        res.render('shop', {
          products: collectionsArray
        })
      }

    );

});

module.exports = router;
