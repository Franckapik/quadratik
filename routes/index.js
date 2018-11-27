var express = require('express');
var router = express.Router();

var config = require('../config');
var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('informations')
  .then (
    infos =>
    res.render('index', {
      infos : infos
    })
  );


});

module.exports = router;
