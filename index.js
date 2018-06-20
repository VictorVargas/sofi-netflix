'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/sofi_netflix', {})
.then(() => {
    console.log('Conexion a Mongodb');
    app.listen(port, () => {
        console.log(`Escuchando por el puerto ${port}`);
    });
}).catch(err => console.log(err));
