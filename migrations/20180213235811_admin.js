exports.up = function(knex, Promise) {
  knex.schema.hasTable('admin').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('admin', function(t) {
      t.increments();
      t.string('nomUtilisateur');
      t.string('hashPwd');
      t.timestamps();

    });
  }
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
};
