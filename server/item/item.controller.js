const itemService = require('./item.service');

exports.getAll = (req, res, next) => {
  itemService.findAll()
    .then(items => res.json(items))
    .catch(err => next(err));
}

exports.create = (req, res, next) => {
  itemService.create(req.body)
    .then(item => res.json(item))
    .catch(err => next(err));
}

exports.getById = (req, res, next) => {
  itemService.getById(req.params.id)
    .then(item => res.json(item))
    .catch(err => next(err));
}

exports.delete = (req, res, next) => {
  itemService.delete(req.params.id)
    .then(() => res.json({
      success: true
    }))
    .catch(err => next(err));
}