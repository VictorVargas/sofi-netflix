'use strict';

const mongoose = require('mongoose');
mongoose.set('debug', true);
const Schema = mongoose.Schema;

const PeliculaSchema = Schema({
    nombre: String,
    genero: String,
    fecha: Date,
    trash: Boolean,
    etiquetas: [{text:String, fecha:{type:Date, default: Date.now} }]
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);
