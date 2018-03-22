exports.up = function(knex, Promise) {
  return knex.schema.table('commande', function (t) {
  t.dropColumn('montant');

})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('commande', function (t) {
  t.string('montant');

})

};
