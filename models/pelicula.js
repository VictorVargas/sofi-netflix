'use strict';

const mongoose = require('mongoose');
mongoose.set('debug', true);
const Schema = mongoose.Schema;

const PeliculaSchema = Schema({
    nombre: {type:String, required: [true, 'El nombre es requerido']},
    genero: String,
    fecha: {type: Date, default: Date.now},
    trash: {type: Boolean, default:false},
    etiquetas: [{text:String, fecha:{type:Date, default: Date.now} }]
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);
