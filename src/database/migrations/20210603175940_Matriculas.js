exports.up = function(knex) {
  return knex.schema.createTable('Matriculas', function (table){
      table.integer('Cod', 5).notNullable().references('Cod').inTable('Disciplinas');
      table.integer('RA', 5).notNullable().references('RA').inTable('Alunos');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Matriculas');
};