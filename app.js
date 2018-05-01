var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config');


const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: config.connection
});

var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

const store = new KnexSessionStore({
  knex: knex,
  tablename: 'sessions' // optional. Defaults to 'sessions'

});


app.use(session({
  secret: 'mycatiscuteandyoudontcare',
  cookie: {
    maxAge: 1800000 // 30min
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));


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


//ROUTES VARIABLES

var index = require('./routes/index');
var users = require('./routes/users');
var guide = require('./routes/guide');
var quadralab = require('./routes/quadralab');
var shop = require('./routes/shop');
var cart = require('./routes/cart');
var sess = require('./routes/sessionObj');
var admin = require('./routes/admin');
var dbcreate = require('./routes/dbcreate');
var checkout = require('./routes/checkout');
var essai = require('./routes/essai');



//ROUTES
app.use('/', index);
app.use('/guide', guide);
app.use('/users', users);
app.use('/quadralab', quadralab);
app.use('/shop', shop);
app.use('/cart', cart);
app.use('/sessionObj', sess);
app.use('/dbcreate', dbcreate);
app.use('/admin', admin);
app.use('/checkout', checkout);
app.use('/essai', essai);


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
