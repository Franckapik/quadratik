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
var bcrypt = require('bcrypt');

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
    res.render('admin', {
      product
    });
  })

});

router.post('/productCreate', function(req, res, next) {

  if (req.body.update !== "") {
    console.log('Update');
    Product.sync()
      .then(() => {

        return Product.update({
          name: req.body.name,
          price: req.body.price,
          img: req.body.img,
          nbCouleurs: req.body.nbCouleurs,
          collectionId: req.body.collectionId,
          descriptionId: req.body.descriptionId,
          performanceId: req.body.performanceId
        }, {
          where: {
            name: req.body.update
          }
        });
      }).then((product) => {
        res.redirect('/admin')
      })
  } else {

    Product.sync()
      .then(() => {

        return Product.create({
          name: req.body.name,
          price: req.body.price,
          img: req.body.img,
          nbCouleurs: req.body.nbCouleurs,
          collectionId: req.body.collectionId,
          descriptionId: req.body.descriptionId,
          performanceId: req.body.performanceId
        });
      }).then((product) => {
        res.redirect('/admin')
      })
  }



});

/* GET ADMIN page. */
router.post('/login', function(req, res, next) {
  var hash;

  function isMailExist(loginMail) {
    return User.count({
        where: {
          mail: loginMail
        }
      })
      .then(count => {
        console.log(count);
        if (count >= 1) { //pas de compte suplementaire pour un mm mail
          return true;
        }
        return false;
      });
  }

  isMailExist(req.body.loginMail).then(exist => {
    console.log(exist);

    if (exist) {
      //get hash from db
      User.findAll({
        where: {
          mail: req.body.loginMail
        }
      }).then(user => {
        console.log('user', user);
        hash = user.hashPwd;
        var myPlaintextPassword = req.body.loginPwd;

        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {

          if (res) {
            console.log("Connection au compte réussie")
            res.send('authentification réussie')
          } else {
            console.log("Connection au compte via la session echouée", err)
          }
        });

      });
    } else {
      console.log('Adresse mail inconnue')
      res.send('Adresse mail inconnue');
    }


  })


});

router.get('/user', function(req, res, next) {
  User.findAll().then(users => {
    res.json({
      users: users
    })
  });

});

router.get('/livraison', function(req, res, next) {
  Livraison.findAll().then(livraison => {
    res.json({
      livraison: livraison
    })
  })

});

router.get('/paiement', function(req, res, next) {
  Paiement.findAll().then(paiement => {
    res.json({
      paiement: paiement
    })
  })

});

router.post('/createAccount', function(req, res, next) {

  var myPlaintextPassword = req.body.passwordCheck;
  console.log(myPlaintextPassword);

  bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
    console.log(hash);
    User.sync()
      .then(() => {

        User.update({
            hashPwd: hash
          }, {
            where: {
              sessID: req.sessionID
            }
          }).then(result =>
            console.log(result)
          )
          .catch(err =>
            console.log(err)
          )


      });

  });

});

module.exports = router;
