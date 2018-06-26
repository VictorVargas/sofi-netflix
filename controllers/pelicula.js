'use strict';

const Pelicula = require('../models/pelicula');

//rutas

function listarPeliculas(req, res) {
    Pelicula.find({}).sort({_id:-1}).exec((err, peliculas) => {
        if(err){
            res.status(500).send({
                message: 'Error de servidor'
            });
        }else{
            res.status(200).send({
                peliculas
            });
        }
    });
}

function guardarPelicula(req, res) {
    let pelicula = new Pelicula();
    let params = req.body;

    pelicula.nombre = params.nombre;
    pelicula.genero = params.genero;
    pelicula.fecha = params.fecha;
    pelicula.trash = params.trash;
    pelicula.etiquetas = params.etiquetas;

    pelicula.save((err, peliculaStore) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor',
                err: err.errors['nombre'].message
            });
        }else{
            if(peliculaStore){
                res.status(200).send({
                    pelicula: peliculaStore
                });
            }else{
                res.status(200).send({
                    message: 'No se ha guardado la pelicula',
                });
            }
        }
    });
}

function actualizarPelicula(req, res) {
    Pelicula.findByIdAndUpdate(req.params.id, res.body, {new:true}, (err, pelicula) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor',
            });
        }else{
            if(pelicula){
                res.status(200).send({
                    pelicula: pelicula
                });
            }else{
                res.status(404).send({
                    message: 'No se pudo actualizar la pelicula',
                });
            }
        }
    });
}

function borrarPelicula(req, res){
    Pelicula.findByIdAndRemove(req.params.id, (err, pelicula) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor',
            });
        }else{
            if(pelicula){
                res.status(200).send({
                    pelicula: pelicula
                });
            }else{
                res.status(404).send({
                    message: 'No existe la pelicula que se envio',
                });
            }
        }
    });
}

module.exports = {
    listarPeliculas,
    guardarPelicula,
    actualizarPelicula,
    borrarPelicula
};
