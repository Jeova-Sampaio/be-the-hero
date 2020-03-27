
exports.up = function(knex) {
  knex.schema.createTable('incidents', function (table) {
    table.increments();

    table.string('title').notNullalble();
    table.string('description').notNullalble();
    table.decimal('value').notNullalble();

    table.string('ong_id').notNullalble();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('incidents');
};
