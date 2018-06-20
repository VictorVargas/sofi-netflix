'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// cargar rutas
const peliculasRoutes = require('./routes/peliculas');

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ruta base
app.use('/api', peliculasRoutes);

module.exports = app;
