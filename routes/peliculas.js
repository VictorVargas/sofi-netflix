'use strict';

const express = require('express');
const PeliculaContorller = require('../controllers/pelicula');

const api = express.Router();

api.get('/peliculas', PeliculaContorller.listarPeliculas);
api.post('/pelicula', PeliculaContorller.guardarPelicula);

module.exports = api;
