exports.up = function(knex) {
  return knex.schema.createTable('Alunos', function (table){
      table.integer('RA', 5).primary();
      table.string('Nome', 40).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Alunos');
};