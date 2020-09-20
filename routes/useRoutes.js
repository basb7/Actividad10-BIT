const express = require('express');
const UserController = require('../controllers/UserController')

const api = express.Router();

api.get('/saludar' , (req, res)=>{
    console.log('llego a la ruta saludar...')
});

api.post('/', UserController.create);

api.put('/:id', UserController.modify);

api.get('/', UserController.viewList)

api.delete('/:id', UserController.deleteUser)

module.exports = api;