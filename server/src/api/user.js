const express = require('express');
const bodyParser = require('body-parser');
const UserControllers = require('../controllers/userController')();
const veryToken = require('../middleware/veryToken');
const Router = express.Router();

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: false }));
Router.post('/signin', UserControllers.signIn);
Router.post('/signup', UserControllers.signUp);
Router.get('/getinfor', veryToken, UserControllers.getInfor);
Router.get('/getAllUser', veryToken, UserControllers.getAllUser);
module.exports = Router;
