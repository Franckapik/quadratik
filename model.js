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

      //collectionId: Sequelize.STRING,
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL,
      img: Sequelize.STRING,
      //descriptionID: Sequelize.TEXT,
      nbCouleurs: Sequelize.STRING,
      //performanceId: Sequelize.STRING

})

const Description = sequelize.define('description', {

      description: Sequelize.TEXT
})

const Collection = sequelize.define('collection', {

      name: Sequelize.STRING,
      description: Sequelize.TEXT

})

const Performance = sequelize.define('performance', {

      frequence: Sequelize.STRING,
      classement: Sequelize.STRING,
      graph: Sequelize.STRING

})

const Panier = sequelize.define('panier', {

      item: Sequelize.STRING,
      total: Sequelize.STRING

})

const User = sequelize.define('user', {

      sessID: Sequelize.STRING,
      nom: Sequelize.STRING,
      prenom: Sequelize.STRING,
      adresse: Sequelize.STRING,
      ville: Sequelize.STRING,
      postal: Sequelize.STRING,
      mail: Sequelize.STRING,
      telephone: Sequelize.STRING,
      utilisation: Sequelize.STRING

      //commandeId: Sequelize.STRING
      //adminId: Sequelize.STRING,

})

const Livraison = sequelize.define('livraison', {

      type: Sequelize.STRING,
      nomcomplet: Sequelize.STRING,
      adresse: Sequelize.STRING,
      ville: Sequelize.STRING,
      region: Sequelize.STRING,
      postal: Sequelize.STRING,
      fdp: Sequelize.STRING

})

const Commande = sequelize.define('commande', {

      transaction: Sequelize.STRING,
      montant: Sequelize.STRING,
      tokenID: Sequelize.STRING,
      chargeID: Sequelize.STRING,
      statut: Sequelize.STRING,
      time: Sequelize.DATE,
      cardID: Sequelize.STRING,
      typeCarte: Sequelize.STRING,
      last4: Sequelize.STRING,
      promo: Sequelize.STRING

})

const Admin = sequelize.define('admin', {

      nomUtilisateur: Sequelize.STRING,
      hashPwd: Sequelize.STRING
})

Product.belongsTo(Collection); //collectionId in Product
Product.belongsTo(Description); //descriptionId in Product
Product.belongsTo(Performance); //performanceId in Product
User.belongsTo(Admin); //adminId in User
User.belongsTo(Commande); //commandeId in User

//creation des schemas dans la DB
/*
User.sync();
Livraison.sync();
Commande.sync();
Product.sync();
Description.sync();
Collection.sync();
Performance.sync();

*/

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

module.exports = {User, Livraison, Commande, Product, Description, Collection, Performance, Admin};
