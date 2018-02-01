
module.exports = {
const Sequelize = require('sequelize');
//DATABASE with sequelize

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'db.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




const Product = sequelize.define('product', {

      name: Sequelize.STRING,
      price: Sequelize.DECIMAL,
      img: Sequelize.STRING,
      description: Sequelize.TEXT

})

const User = sequelize.define('user', {

      nom: Sequelize.STRING,
      prenom: Sequelize.STRING,
      adresse: Sequelize.STRING,
      ville: Sequelize.STRING,
      region: Sequelize.STRING,
      postal: Sequelize.STRING,
      mail: Sequelize.STRING,
      telephone: Sequelize.STRING,
      utilisation: Sequelize.STRING

})

const Livraison = sequelize.define('livraison', {

      nomcomplet: Sequelize.STRING,
      adresse: Sequelize.STRING,
      ville: Sequelize.STRING,
      region: Sequelize.STRING,
      postal: Sequelize.STRING,

})

const Paiement = sequelize.define('paiement', {

      transaction: Sequelize.STRING,
      montant: Sequelize.STRING,
      token: Sequelize.STRING,
      statut: Sequelize.STRING,
      time: Sequelize.STRING,

})
/*
Product.sync({force: true}).then(() => {
  // Table created
  return Product.create({
    name: 'Klassik-6',
    price: 50,
    img: '/images/modeles/klassik/klassik-6.jpg',
    description: 'Le modèle standard, simple et efficace !'
  });
});*/

};
