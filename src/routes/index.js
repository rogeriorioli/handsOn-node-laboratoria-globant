const express = require('express');

const UserController = require('../controllers/UserController')


const route = express.Router();

const userController = new UserController();

route.post('/user', userController.createUser); //CREATE

route.get('/users', userController.index); //READ

route.get('/user/:id', userController.getUser); //Read

route.put('/user/:id', userController.updateUser) //UPDATE

route.delete('/user/:id', userController.deleteUser) //DELETE

//NESTJS
//KNEX 



module.exports = route