var express = require('express');
var router = express.Router();
var model = require('../model');
var Product = model.Product;

const Sequelize = require('sequelize');
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

router.post('/productCreate', function(req, res, next) {

  User.sync()
    .then(() => {

      return User.create({
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        description: req.body.description
      });
    });


});



module.exports = router;
