exports.up = function(knex) {
  knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullalble();
    table.string('email').notNullalble();
    table.string('whatsapp').notNullalble();
    table.string('city').notNullalble();
    table.string('uf', 2).notNullalble();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};