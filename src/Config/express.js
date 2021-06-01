const express = require('express');
const app = express();

const routes = require('../Routes');
app.use('/', routes);
app.use('/rota2', routes);

module.exports = app;