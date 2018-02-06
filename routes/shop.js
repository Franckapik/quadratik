var express = require('express');
var router = express.Router();
var model = require('../model');
var User = model.User;
var Livraison = model.Livraison;
var Paiement = model.Paiement;
var Product = model.Product;
var Description = model.Description;
var Collection = model.Collection;
const Sequelize = require('sequelize');
var config = require('../config');

//DATABASE with sequelize

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'db.sqlite'
});

router.get('/', function(req, res, next) {

  Product.findAll({ include: [{ all: true }]}).then(product => {
    ;
    res.render('shop', {
      data : product
    });
  })

});

module.exports = router;
