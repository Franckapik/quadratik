var express = require('express');
var router = express.Router();
var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

router.post('/user', function(req, res, next) {

  knex('user')
    .returning('id')
    .insert({
      sessId: req.sessionID,
      nom: req.body.nom,
      prenom: req.body.prenom,
      adresse: req.body.adresse,
      ville: req.body.ville,
      postal: req.body.codepostal,
      mail: req.body.mail,
      telephone: req.body.telephone,
      contexte: req.body.utilisation,
    })
    .then(id => console.log('Utilisateur enregistré [id]: ', sessId, '|| ligne', id));

  knex('admin')
  .returning('id')
  .insert({
      user: req.body.mail,
      hashpwd: null
    }).then(id => console.log('Admin enregistré [id]: ', id) );

});

//admin FK

router.post('/livraison', function(req, res, next) {

  knex('livraison')
  .returning('id')
  .insert({
    mode: req.body.typeLivraison,
    nom: req.body.livraison_nom,
    adresse: req.body.livraison_adresse,
    ville: req.body.livraison_ville,
    postal: req.body.livraison_codepostal
  }).then(id => console.log('Adresse livraison enregistrée [id]: ', id) );

//livraison FK

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
