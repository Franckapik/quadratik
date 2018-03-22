
exports.up = function(knex, Promise) {
  knex.schema.hasTable('modele').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('modele', function(t) {
      t.increments();
      t.string('type');
      t.string('frequence');
      t.string('classement');
      t.string('graph');
      t.string('description');
    });
  }
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('modele');
};
