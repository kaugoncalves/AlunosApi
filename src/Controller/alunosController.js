knex = require("../Config/database");

module.exports = {
  async delete(request, response) {
    try {
      const { ra } = request.body;

      const ret = await knex("alunos").where({ ra }).del();

      return response.json(ret);
    } catch (erro) {
      console.log(erro);
      return response.status(500).json(erro);
    }
  },

  async list(request, response) {
    try {
      const ret = await knex("alunos").select("*");

      return response.json(ret);
    } catch (erro) {
      console.log(erro);
      return response.status(500).json(erro);
    }
  },
};
