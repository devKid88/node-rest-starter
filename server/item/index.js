const express = require('express');
const itemController = require('./item.controller');
const router = express.Router();

// GET ALL api/items
router.get('/', itemController.getAll);

// GET ONE api/items/id
router.get('/:id', itemController.getById);

// POST api/items
router.post('/', itemController.create);

// DELETE api/items/id
router.delete('/:id', itemController.delete);

module.exports = router;