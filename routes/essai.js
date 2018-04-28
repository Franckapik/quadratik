var express = require('express');
var router = express.Router();
//var Client = require('node-rest-client').Client;

/* GET home page. */
router.get('/', function(req, res, next) {
/*
var options_auth = { user: "franckapik", password: "fanch/44" };

var client = new Client(options_auth);

var args = {
    headers: { "Content-Type": "application/xml",
    "access_key": "cg2tfd2q"}
};

  client.get("https://www.envoimoinscher.com/api/v1/countries",args, function (data, response) {
      // parsed response body as js object
    //  console.log(data);
      // raw response
      console.log(response);

  });


  // registering remote methods
  client.registerMethod("jsonMethod", "https://www.envoimoinscher.com/api/v1/countries", "GET");

  client.methods.jsonMethod(args, function (data, response) {
      // parsed response body as js object
      console.log(response.read);
  });



*/


 res.render('essai');

});

module.exports = router;
