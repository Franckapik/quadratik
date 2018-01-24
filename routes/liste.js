var express = require('express');
var router = express.Router();
var config = require('../config')

const keyPublishable = config.stripe_publishable;
const keySecret = config.stripe_secret;
var stripe = require("stripe")(keySecret);

/* GET home page. */
router.get('/', function(req, res, next) {

  stripe.charges.list({
      limit: 3
    },
    function(err, charges) {
      res.send(charges);
    }
  );


});

module.exports = router;
