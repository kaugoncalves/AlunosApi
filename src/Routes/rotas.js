const routes = require('express').Router();
var path = require('path');

const Controller = require('../Controller/controller.js')
const control = new Controller();

routes.get('/', function(req, res) {
  res.sendFile(path.resolve('./src/view/Home/index.js'));
});

routes.post('/rota2', (req, res) => {
  res.send("postt hmm");
});

routes.delete('/matrículas/:cod/:ra', (req, res) =>{
  
})
routes.post('/resultados', (req, res ) => {
  control.adicionarAluno()
})


module.exports = routes; 