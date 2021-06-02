var db = require('../../config/database');

const dao = require('../Daos/dao');

const DAO = new dao();

class Controller {

  adicionarAluno() {
    return function (req, res) {

        DAO.adicionaAluno()
            .then(res.marko(
                require('../views/login.marko')))

            .catch(erro => console.log(erro)
            )
    }
  }
}