knex = require("../Config/database");

module.exports = {

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
