'use strict';

const express = require('express');
const PeliculaContorller = require('../controllers/pelicula');

const api = express.Router();

api.get('/peliculas', PeliculaContorller.listarPeliculas);
api.get('/pelicula/:id', PeliculaContorller.getPelicula);
api.put('/pelicula/:id', PeliculaContorller.actualizarPelicula);
api.delete('/pelicula/:id', PeliculaContorller.borrarPelicula);
api.post('/pelicula', PeliculaContorller.guardarPelicula);

module.exports = api;
