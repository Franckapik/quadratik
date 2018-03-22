exports.up = function(knex, Promise) {
  knex.schema.hasTable('cart').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('cart', function(t) {
      t.increments();
      t.integer('productId')
      .references('id')
      .inTable('product');
      t.string('total');

    });
  }
});
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('cart');
};
