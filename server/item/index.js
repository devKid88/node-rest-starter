const express = require('express');
const ItemController = require('./item.controller');
const router = express.Router();

// GET ALL api/items
router.get('/', ItemController.getAll);

// GET ONE api/items/id
router.get('/:id', ItemController.getById);

// POST api/items
router.post('/', ItemController.create);

// DELETE api/items/id
router.delete('/:id', ItemController.delete);

module.exports = router;