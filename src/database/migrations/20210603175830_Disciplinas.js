exports.up = function(knex) {
  return knex.schema.createTable('Disciplinas', function (table){
      table.integer('Cod', 5).primary();
      table.string('Nome', 40).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Disciplinas');
};