exports.up = function(knex) {
  return knex.schema.createTable('Resultados', function (table){
      table.integer('Cod', 5).notNullable().references('Cod').inTable('Disciplinas');
      table.integer('RA', 5).notNullable().references('RA').inTable('Alunos');
      table.double('Freq', 5).notNullable();
      table.double('Nota', 5).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Resultados');
};