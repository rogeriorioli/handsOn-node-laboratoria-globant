const express = require('express');

const UserController = require('../controllers/UserController')


const route = express.Router();

const userController = new UserController();


route.get('/user', userController.index);

route.post('/user', userController.createUser);






module.exports = route