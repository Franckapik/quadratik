
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('commande');
};

exports.down = function(knex, Promise) {
  knex.schema.hasTable('commande').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('commande', function(t) {
      t.increments();
      t.string('transaction');
      t.string('montant');
      t.string('tokenId');
      t.string('chargeId');
      t.string('status');
      t.string('time');
      t.string('cardId');
      t.string('typeCarte');
      t.string('last4');
      t.string('promo');
      t.timestamps();

    });
  }
});
};
