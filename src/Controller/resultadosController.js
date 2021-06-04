knex = require("../Config/database");

module.exports = {
  async list(request, response) {
    try {
      const ret = await knex("Resultados").select("*");

      return response.json(ret);
    } catch (erro) {
      return response.status(500).json(erro);
    }
  },

  async insert(request, response) {
    const params = {
      cod: request.params.cod,
      ra: request.params.ra,
      freq: request.params.freq, //todos params e depois todas validações
      nota: request.params.nota,
    };

    const { ra, cod } = params;

    console.log(params);

    const transaction = await knex.transaction(); // Begin Tran, como se fosse um checkpoint

    try {
      const aluno = await transaction("alunos").where({ ra }).first();

      if (!aluno) {
        return response
          .status(404)
          .json({ message: `Aluno do código ${ra} não encontrado` });
      }

      const disciplina = await transaction("Disciplinas")
        .where({ cod })
        .first();

      if (!disciplina) {
        return response
          .status(404)
          .json({ message: `Disciplina do código ${cod} não encontrada` });
      }

      const matricula = await transaction("matriculas")
        .where({ ra, cod })
        .first();

      if (!matricula) {
        return response.status(404).json({
          message: "O aluno do ra informado não está matriculado nessa matéria",
        });
      }

      const resultado = await transaction("resultados")
        .where({ ra, cod })
        .first();

      if (resultado) {
        return response.status(500).json({
          message: "Um resultado com esses parametros já existe",
          resultado,
        });
      }

      const resultado_inserido = await transaction("resultados")
        .insert(params)
        .returning("*"); // Insere resultado

      console.log(resultado_inserido);

      transaction.commit();
      return response.status(200).json(resultado_inserido[0]);
    } catch (erro) {
      console.log(erro);
      transaction.rollback();
      return response
        .status(500)
        .json({ message: "Ocorreu um erro inesperado ", erro });
    }
  },
};
