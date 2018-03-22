exports.up = function(knex, Promise) {
  return knex.schema.createTable('product', function(t) {
    t.increments();
    t.string('name');
    t.string('price');
    t.string('nbColors');
    t.timestamps();
    t.integer('collectionId')
      .references('id')
      .inTable('collection');
    t.integer('modeleId')
      .references('id')
      .inTable('modele');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('product');
};
