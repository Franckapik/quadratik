var express = require('express');
var router = express.Router();
var model = require('../model');
var User = model.User;
var Livraison = model.Livraison;
var Paiement = model.Paiement;
var Admin = model.Admin;
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

router.post('/user', function(req, res, next) {

  User.sync()
    .then(() => {

      return User.create({
        sessID: req.sessionID,
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        ville: req.body.ville,
        postal: req.body.codepostal,
        mail: req.body.mail,
        telephone: req.body.telephone,
        utilisation: req.body.utilisation,
      });
    });

    Admin.sync()
      .then(() => {

        return Admin.create({
          nomUtilisateur: req.body.mail,
          hashPwd: null
        });
      });



});

router.post('/livraison', function(req, res, next) {

  Livraison.sync()
    .then(() => {

      return Livraison.create({
        type: req.body.typeLivraison,
        nomcomplet: req.body.livraison_nom,
        adresse: req.body.livraison_adresse,
        ville: req.body.livraison_ville,
        postal: req.body.livraison_codepostal,
        fdp: null
      });
    });



});

router.post('/paiement', function(req, res, next) {

  Paiement.sync()
    .then(() => {

      return Paiement.create({
        choixPaiement: req.body.typeLivraison,
        total: req.session.cart_total,
      });
    });



});


module.exports = router;
