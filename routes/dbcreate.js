var express = require('express');
var router = express.Router();
var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

//Passer la commande : ajoute le panier à la base de donnée
router.post('/cartToDB', function(req, res, next) {
  knex('user')
    .returning('id')
    .insert({
      sessid: req.session.id
    })
    .then(id => {

      req.session.userid = parseInt(id);
      console.log("Nouvel utilisateur :", id, '/', req.session.userid);

      knex('cart')
        .returning('products')
        .insert({
          userid : req.session.userid,
          products: req.session.cart,
          total_produits: req.session.cart_total_produits,
          total_fdp: req.session.cart_total_fdp,
          total: req.session.cart_total,
          sessid: req.session.id
        })
        .then(products => {console.log('Commande en cours: ', products);
      res.end();
    });

    })



});

router.post('/user', function(req, res, next) {
console.log('userid:', req.session.userid);
  knex('user')
    .where('id', req.session.userid)
    .update({
      nom: req.body.nom,
      prenom: req.body.prenom,
      adresse: req.body.adresse,
      ville: req.body.ville,
      postal: req.body.codepostal,
      mail: req.body.mail,
      telephone: req.body.telephone,
      contexte: req.body.utilisation,
    })
    .then(console.log('Utilisateur [', req.session.userid, '] enregistré.'));

  knex('admin')
    .returning('id')
    .insert({
      user: req.body.mail,
      hashpwd: null
    }).then(id => console.log('Admin enregistré [id]: ', id));

});

//admin FK

router.post('/livraison', function(req, res, next) {

  knex('livraison')
    .returning('id')
    .insert({
      userid : req.session.userid,
      mode: req.body.typeLivraison,
      nom: req.body.livraison_nom,
      adresse: req.body.livraison_adresse,
      ville: req.body.livraison_ville,
      postal: req.body.livraison_codepostal
    }).then(id => console.log('Adresse livraison enregistrée [id]: ', id));

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
