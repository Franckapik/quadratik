var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config')

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
var pay_success = require('./routes/pay_success');
var pay_err = require('./routes/pay_err');
var buy = require('./routes/buy');
var charge = require('./routes/charge');
var liste = require('./routes/liste');

//ROUTES
app.use('/', index);
app.use('/guide', guide);
app.use('/users', users);
app.use('/quadralab', quadralab);
app.use('/shop', shop);
app.use('/pay_success', pay_success);
app.use('/pay_err', pay_err);
app.use('/buy', buy); //paypal
app.use('/charge', charge); //stripe
app.use('/liste', liste); //stripe admin


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


module.exports = app;
