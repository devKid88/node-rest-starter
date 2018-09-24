const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

// GET ALL api/users
router.get('/', userController.getAll);

// GET ONE api/users/id
router.get('/:id', userController.getById);

// DELETE api/users/id
router.delete('/:id', userController.delete);

// REGISTER api/users/register
router.post('/register', userController.create);

// AUTHENTICATE api/users/authenticate
router.post('/authenticate', userController.authenticate);

module.exports = router;
