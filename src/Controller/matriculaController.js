knex = require("../Config/database");

module.exports = {

  async list(request, response) {

    try {

      const ret = await knex("matriculas").select("*");

      return response.json(ret);
    } catch (erro) {

      return response.status(500).json(erro);
    }
  },

  async delete(request, response) {
    try {

      const { cod, ra } = request.params;
      console.log(request.params);
      const transaction = await knex.transaction(); // Begin Tran, como se fosse um checkpoint
      
      const aluno = await transaction("alunos").where({ ra }).first();

      if (!aluno) {

        return response
          .status(404)
          .json({ message: `Aluno do RA ${ra} não foi encontrado` });
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

      const matriculaAluno = await knex("matriculas")
        .returning(["cod", "ra"])
        .where({
          ra,
          cod,
        })
        .del();  

        return response.json({
          message: `Aluno do ra ${ra} removido da disciplina ${cod} com sucesso`
        });
        
      }catch (erro) {

        console.log(erro);
        transaction.rollback();
        return response
          .status(500)
          .json({ message: "Ocorreu um erro inesperado ", erro });
      }
  },
};
