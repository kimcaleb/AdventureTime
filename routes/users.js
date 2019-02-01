const express = require('express');
const usersRouter = new express.Router();
const User = require('../controllers/users.js');
const verifyToken = require('../serverAuth').verifyToken;
const City = require('../controllers/cities.js');

//Non protected routes
usersRouter.get('/', User.index);
usersRouter.post('/', User.create);
usersRouter.post('/authenticate', User.authenticate);

// Protected Routes
    //User routes
usersRouter.use(verifyToken);
usersRouter.get('/:id', User.show);
usersRouter.patch('/:id', User.update);
usersRouter.delete('/:id', User.destroy);
    //City routes
usersRouter.post('/:id/cities', City.create);
usersRouter.delete('/:user_id/cities/:city_id', City.destroy);





module.exports = usersRouter
