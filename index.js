const mongoose = require('mongoose');
const express = require('express');
const app = require('./app');

const port = 3000

const URI = 'mongodb://localhost:27017/eduBIT';

mongoose.connect(URI, { useNewUrlParser: true , useUnifiedTopology: true}, (error, res)=> {
    if(error){
        console.log('Error de conexion', error);
    }else{
        console.log('La conexion se ha creado con exito!');
        app.listen(port, ()=>{
            console.log('Escuchando en el puerto', port);
        })
    }
} )
