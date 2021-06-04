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

      const ret = await knex("matriculas")
        .returning(["cod", "ra"])
        .where({
          ra,
          cod,
        })
        .del();

      return response.json(ret);
    } catch (erro) {
      console.log(erro);
    }
  },
};
