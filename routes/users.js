const express = require('express');
const usersRouter = new express.Router();
const User = require('../controllers/users.js');
const verifyToken = require('../serverAuth').verifyToken;

//Non protected routes
usersRouter.get('/', User.index);
usersRouter.post('/', User.create);
usersRouter.post('/authenticate', User.authenticate);

// Protected Routes
usersRouter.use(verifyToken);
usersRouter.get('/:id', User.show);
usersRouter.patch('/:id', User.update);
usersRouter.delete('/:id', User.destroy);

module.exports = usersRouter
