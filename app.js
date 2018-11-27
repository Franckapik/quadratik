var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config');
var server = app.listen(3000);
var io = require('socket.io').listen(server);
var ent = require('ent');
var nodemailer = require('nodemailer');
const environment = process.env.NODE_ENV || 'development'; // if something else isn't setting ENV, use development
const configuration = require('./knexfile')[environment]; // require environment's settings from knexfile
const knex = require('knex')(configuration);

const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);


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
  resave: false, //laissé sur false pour le panier
  saveUninitialized: true
}));


app.use(logger('dev'));

//VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(favicon(path.join(__dirname, 'public/', 'favicon.ico')));

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
var mailer = require('./routes/mailer');
var success = require('./routes/success');
var commande = require('./routes/commande');



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
app.use('/mailer', mailer);
app.use('/success', success);
app.use('/commande', commande);


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

//Socket.IO
var client = [];
var count = 0;
io.sockets.on('connection', function(socket, couleur) {
  console.log('Nouvel utilisateur connecté : ', socket.id);
  // Dès qu'on nous donne un couleur, on le stocke en variable de session et on informe les autres personnes
  socket.on('nouveau_client', function(couleur) {
    socket.couleur = couleur;
    socket.broadcast.emit('nouveau_client', couleur);
  });

  // Dès qu'on reçoit un message, on récupère le couleur de son auteur et on le transmet aux autres personnes
  socket.on('message', function(message) {
    message = ent.encode(message);
    console.log(message);

    socket.broadcast.emit('message', {
      couleur: socket.couleur,
      message: message
    });



    if (client.indexOf(socket.id) == -1) { //first msg

      //notification
      socket.emit('notification', message);

      client.push(socket.id);
      console.log("1er message de ", socket.id, message);
      count = 1;
      nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport(config.mail);
        let mailOptions = {
          from: '<serveur@Quadratik.fr>', // sender address
          to: 'contact@quadratik.fr', // list of receivers
          subject: '[Chatbox] Demande de conversation instantanée', // Subject line
          text: socket.id + ' | ' + message // plain text body
          //html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }

          console.log('Mail envoyé :', message );
        });
      });
      console.log('nvo client', socket.id);


    } else {
      count = count + 1;
      console.log(count, message);
    }



  });
});


module.exports = app;
