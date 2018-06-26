'use strict';

const express = require('express');
const PeliculaContorller = require('../controllers/pelicula');

const api = express.Router();

api.get('/peliculas', PeliculaContorller.listarPeliculas);
api.post('/pelicula', PeliculaContorller.guardarPelicula);
api.put('/pelicula/:id', PeliculaContorller.actualizarPelicula);
api.delete('/pelicula/:id', PeliculaContorller.borrarPelicula);

module.exports = api;
