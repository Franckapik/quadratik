var express = require('express');
var router = express.Router();
var config = require('../config');
var bcrypt = require('bcrypt');

var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

module.exports = router;
