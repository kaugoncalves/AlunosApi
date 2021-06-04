const express = require('express');
const app = express();

const routes = require('../Routes/rotas.js');
app.use(express.json())
module.exports = app;