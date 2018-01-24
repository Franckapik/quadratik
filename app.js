var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

//Payment requiring
var paypal = require('paypal-rest-sdk');

const keyPublishable = "pk_test_oaiyISu3eJI542wOXmZ0ePd4";
const keySecret = "sk_test_Ni9H4zEQgnRRZyABHemWY6Bh";
var stripe = require("stripe")(keySecret);

// configure paypal with the credentials you got when you created your paypal app
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AfOhgzVI02bsj86o3bP0ShMJC3lMWBCqUuv1Iv9amOIp2HrKGFvFVUC9EoshmpefxHROzTKrF0PmAdnY', // please provide your client id here
  'client_secret': 'EHjACTc6bF5yxFLCZZuJU0QLb8Y8YL672wah1cmqwQS-CZy9OQSOUQ2YvfuX0GlXi1pOHuH1gPtzHzXf' // provide your client secret here
});


//STRIPE
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/charge", (req, res) => {
  console.log(req.body.nbItems);
  let amount = (req.body.nbItems*100).toFixed(0);;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken,
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "eur",
         customer: customer.id
    }))
  .then(function(charge){
    if(charge.paid){
       res.render("charge.ejs", { charge });

    }
    else {
 res.send('Erreur de paiment');
    }}
  );
});

//VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());

//STATICS

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'quadralab')));
app.use(express.static(path.join(__dirname, 'views')));

//ROUTES VARIABLES

var index = require('./routes/index');
var users = require('./routes/users');
var guide = require('./routes/guide');
var quadralab = require('./routes/quadralab');
var shop = require('./routes/shop');
var pay_sucess = require('./routes/pay_sucess');
var pay_err = require('./routes/pay_err');

//ROUTES
app.use('/', index);
app.use('/guide', guide);
app.use('/users', users);
app.use('/quadralab', quadralab);
app.use('/shop', shop);
app.use('/pay_sucess', pay_sucess);
app.use('/pay_err', pay_err);
app.use('/liste',function(req, res, next){

stripe.charges.list(
  { limit: 3 },
  function(err, charges) {
  res.send(charges);
  }
);


});


//PAYPAL

// start payment process
app.get('/buy' , ( req , res ) => {
	// create payment object
    var payment = {
            "intent": "authorize",
	"payer": {
		"payment_method": "paypal"
	},
	"redirect_urls": {
		"return_url": "https://localhost:3000/pay_success",
		"cancel_url": "https://localhost:3000/pay_err"
	},
	"transactions": [{
		"amount": {
			"total": 39.00,
			"currency": "USD"
		},
		"description": " a book on mean stack "
	}]
    }


	// call the create Pay method
    createPay( payment )
        .then( ( transaction ) => {
            var id = transaction.id;
            var links = transaction.links;
            var counter = links.length;
            while( counter -- ) {
                if ( links[counter].method == 'REDIRECT') {
					// redirect to paypal where user approves the transaction
                    return res.redirect( links[counter].href )
                }
            }
        })
        .catch( ( err ) => {
            console.log( err );
            res.redirect('/pay_err');
        });
});






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// helper functions
var createPay = ( payment ) => {
    return new Promise( ( resolve , reject ) => {
        paypal.payment.create( payment , function( err , payment ) {
         if ( err ) {
             reject(err);
         }
        else {
            resolve(payment);
        }
        });
    });
}


module.exports = app;
