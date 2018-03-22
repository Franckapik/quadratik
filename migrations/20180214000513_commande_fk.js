
exports.up = function(knex, Promise) {
  return knex.schema.table('commande', function (t) {
  t.string('montant')
  .references('total')
  .inTable('cart');

})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('commande', function (t) {
  t.dropForeign('montant');
});
};
