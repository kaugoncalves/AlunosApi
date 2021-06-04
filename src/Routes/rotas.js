const express = require('express');
const routes = express.Router();  

const alunoController = require('../Controller/alunosController');
const resultadoController = require('../Controller/resultadosController');
const matriculasController = require('../Controller/matriculaController');
const disciplinasController = require('../Controller/disciplinasController');

routes.post('/resultados/:ra/:cod/:freq/:nota', resultadoController.insert);

routes.get('/resultados', resultadoController.list); 

routes.get('/alunos', alunoController.list);

routes.get('/matriculas', matriculasController.list);

routes.get('/disciplinas', disciplinasController.list);

routes.delete('/matriculas/:cod/:ra', matriculasController.delete) 

module.exports = routes;
