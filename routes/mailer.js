var express = require('express');
var router = express.Router();
var config = require('../config');
var nodemailer = require('nodemailer');

router.post('/contact', function(req, res, next) {

  nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport(config.mail);

      // setup email data with unicode symbols
      let mailOptions = {
          from: req.body.contact_nom + '<foo@example.com>', // sender address
          to: 'contact@quadratik.fr', // list of receivers
          subject: '[ ' + req.body.contact_mail + ' ]' + '[ ' + req.body.contact_superficie + ' ]' + ' Mail Quadratik.fr', // Subject line
          text: req.body.contact_msg // plain text body
          //html: '<b>Hello world?</b>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          res.redirect('/success?type=Message+Envoyé');
          console.log('Message sent: %s', info.messageId);
            });
  });

  });

  router.post('/form', function(req, res, next) {

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(config.mail);

        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.traitement_nom + '<foo@example.com>', // sender address
            to: 'contact@quadratik.fr', // list of receivers
            subject: '[ ' + req.body.traitement_mail + ' ]' + ' Formulaire de traitement acoustique', // Subject line
            html: '<p>' + 'Longueur de pièce :' + req.body.traitement_longueur + '</p>' +
            '<p>' + 'Largeur de pièce :'+req.body.traitement_largeur +'</p>' +
            '<p>' + 'Hauteur de pièce :'+req.body.traitement_hauteur +'</p>' +
            '<p>' + 'Utilisation de la pièce :'+req.body.traitement_utilisation +'</p>' +
            '<p>' + 'Traitement souhaité :'+req.body.traitement_souhait +'</p>' +
            '<p>' + 'Acoustique indésirable :'+req.body.traitement_indesirable +'</p>' +
            '<p>' + 'Traiement existant :'+req.body.traitement_existant +'</p>' +
            '<p>' + 'Produits convoités :'+req.body.traitement_intérêt +'</p>' +
            '<p>' + 'Budget prévisionel :'+req.body.traitement_budget +'</p>' +
            '<p>' + 'Niveau de traitement souhaité :'+req.body.traitement_type+'</p>' +
            '<p>' + 'Personalisation des produits :'+req.body.traitement_perso +'</p>' +
            '<p>' + 'Autre message :'+req.body.traitement_autres +'</p>' +
            '<p>' + 'Images uploadées :'+req.body.traiement_upload +'</p>'// plain text body

 // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.redirect('/success?type=Formulaire+de+traitement+acoustique+envoyé');
            console.log('Message sent: %s', info.messageId);
              });
    });

    });

  router.post('/newsletter', function(req, res, next) {

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(config.mail);

        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.newsletter_nom + '<foo@example.com>', // sender address
            to: 'contact@quadratik.fr', // list of receivers
            subject: '[ ' + req.body.newsletter_mail + ' ]' + ' Abonnement à la Newsletter', // Subject line
            text: '[Abonnement demandé pour la Newsletter Quadratik.fr]' // plain text body
            //html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.redirect('/success?type=Abonnement+Newsletter');
            console.log('Message sent: %s', info.messageId);
              });
    });

    });

module.exports = router;
