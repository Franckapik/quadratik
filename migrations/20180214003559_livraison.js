
exports.up = function(knex, Promise) {
  knex.schema.hasTable('livraison').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('livraison', function(t) {
      t.increments();
      t.string('type');
      t.string('nomComplet');
      t.string('adresse');
      t.string('ville');
      t.string('postal');
      t.string('fdp');
    });
  }
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('livraison');
};
