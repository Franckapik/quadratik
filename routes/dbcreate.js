var express = require('express');
var router = express.Router();
var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});


router.post('/user', function(req, res, next) {
  var errorType = [];

  var validEmail = function(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  var validPhone = function(phone) {
    var regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    return regex.test(phone);
  };

  var validPostal = function(postal) {
    var regex = /^[0-9]{5,5}$/;
    return regex.test(postal);
  };

  if (!validEmail(req.body.form_mail)) {
    errorType.push('Adresse Mail non-valide');
  }

  if (!validPhone(req.body.form_telephone)) {
    errorType.push('Numéro de téléphone non-valide');
  }

  if (!validPostal(req.body.form_codepostal)) {
    errorType.push('Code Postal non-valide');
  }

  if (!req.body.form_nom || !req.body.form_prenom || !req.body.form_adresse || !req.body.form_ville || !req.body.form_codepostal || !req.body.form_telephone || !req.body.form_mail) {
    errorType.push('Une donnée du formulaire est manquante');
  }

  if (!errorType.length) {

    console.log('Formulaire validé || userid:', req.session.userid);

    knex('user')
      .where('id', req.session.userid)
      .update({
        nom: req.body.form_nom,
        prenom: req.body.form_prenom,
        adresse: req.body.form_adresse,
        ville: req.body.form_ville,
        postal: req.body.form_codepostal,
        mail: req.body.form_mail,
        telephone: req.body.form_telephone,
        contexte: req.body.form_utilisation
      })
      .then(

        //console.log('Utilisateur [', req.session.userid, '] enregistré.')
        res.json({
          success: '[Serveur] Formulaire Utilisateur validé'
        })
      );

  } else {
    res.json({
      error: errorType
    })
  }
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
          userid: req.session.userid,
          products: req.session.cart,
          total_produits: req.session.cart_total_produits,
          total_fdp: req.session.cart_total_fdp,
          total: req.session.cart_total,
          sessid: req.session.id
        })
        .then(products => {
          console.log('Commande en cours: ', products);
          res.json({
            success: '[Serveur] Panier enregistré'
          });
        });

    })



});


router.post('/livraison', function(req, res, next) {
  console.log('Livraison choisie :', req.body.livr_choice);


  var errorType = [];
  if (req.body.livr_choice === 'domicile') {
    knex('user')
      .where('id', req.session.userid)
      .then(user => {

        knex('livraison')
          .returning('id')
          .insert({
            userid: req.session.userid,
            mode: req.body.livr_choice,
            nom: user[0].nom + user[0].prenom,
            adresse: user[0].adresse,
            ville: user[0].ville,
            postal: user[0].postal
          })
          .then(id => {
              console.log('[Domicile] Formulaire Livraison validé || userid:', req.session.userid, 'livraison [id]', id);
              res.json({
                success: '[Serveur] [Domicile] Formulaire Livraison validé'
              })
            }

          );

      })
  }


  if (req.body.livr_choice === 'autreAdresse') {

    var validPostal = function(postal) {
      var regex = /^[0-9]{5,5}$/;
      return regex.test(postal);
    };

    if (!validPostal(req.body.livr_postal)) {
      errorType.push('Code Postal non-valide');
    }

    if (!req.body.livr_choice || !req.body.livr_nom || !req.body.livr_adresse || !req.body.livr_ville || !req.body.livr_postal) {
      errorType.push('Une donnée du formulaire est manquante');
    }

    if (!errorType.length) {

      console.log('Formulaire Livraison validé || userid:', req.session.userid);

      knex('livraison')
        .returning('id')
        .insert({
          userid: req.session.userid,
          mode: req.body.livr_choice,
          nom: req.body.livr_nom,
          adresse: req.body.livr_adresse,
          ville: req.body.livr_ville,
          postal: req.body.livr_postal
        })
        .then(id => {
            console.log('Formulaire Livraison validé || userid:', req.session.userid, 'livraison [id]', id);

            res.json({
              success: '[Serveur] Formulaire Livraison validé'
            })
          }

        );

    } else {
      res.json({
        error: errorType
      })
    }
  }



});

module.exports = router;
