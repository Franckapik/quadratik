
exports.up = function(knex, Promise) {
  knex.schema.hasTable('user').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('user', function(t) {
      t.increments();
      t.string('sessID');
      t.string('nom');
      t.string('prenom');
      t.string('adresse');
      t.string('ville');
      t.string('postal');
      t.string('mail');
      t.string('telephone');
      t.string('utilisation');
      t.timestamps();
      t.integer('adminId')
        .references('id')
        .inTable('admin');
      t.integer('commandeId')
        .references('id')
        .inTable('commande');
        t.integer('livraisonId')
          .references('id')
          .inTable('livraison');
    });
  }
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('user');
};
