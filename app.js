var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config');
var paypal = require('paypal-rest-sdk');
var sqlite3 = require('sqlite3').verbose();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false, //affichage console pour les sessions
  // SQLite only
  storage: 'sessions.sqlite'
});

var myStore = new SequelizeStore({
    db: sequelize
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(session({
  secret: 'mycatiscuteandyoudontcare',
  cookie: {
    maxAge: 1800000 // in ms
  },
  store: myStore,
  resave: false,
  saveUninitialized: true,
  proxy: true
}));

myStore.sync();

app.use(logger('dev'));

//VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//STATICS

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'quadralab')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'db')));

//ROUTES VARIABLES

var index = require('./routes/index');
var users = require('./routes/users');
var guide = require('./routes/guide');
var quadralab = require('./routes/quadralab');
var shop = require('./routes/shop');
var pay_success = require('./routes/pay_success');
var pay_err = require('./routes/pay_err');
var liste = require('./routes/liste');
var cart = require('./routes/cart');
var charge = require('./routes/charge');
var sess = require('./routes/sessionObj');
var dbcreate = require('./routes/dbcreate');
var admin = require('./routes/admin');
var productCreate = require('./routes/productCreate');


//ROUTES
app.use('/', index);
app.use('/guide', guide);
app.use('/users', users);
app.use('/quadralab', quadralab);
app.use('/shop', shop);
app.use('/pay_success', pay_success);
app.use('/pay_err', pay_err);
app.use('/liste', liste);
app.use('/cart', cart);
app.use('/charge', charge);
app.use('/sessionObj', sess);
app.use('/dbcreate', dbcreate);
app.use('/admin', admin);
app.use('/productCreate', productCreate);

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
  //console.warn(err);
  res.render('error');
});


module.exports = app;
