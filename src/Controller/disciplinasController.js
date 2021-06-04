knex = require("../Config/database");

module.exports = {
  async list(request, response) {
    try {
      const ret = await knex("Disciplinas").select("*");

      return response.json(ret);
    } catch (erro) {
      return response.status(500).json(erro);
    }
  },
};
