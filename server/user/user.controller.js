const userService = require('./user.service');

exports.getAll = (req, res, next) => {
  userService.findAll()
    .then(users => res.json(users))
    .catch(err => next(err));
};

exports.getById = (req, res, next) => {
  userService.getById(req.params.id)
    .then(user => res.json(user))
    .catch(err => next(err));
};

exports.create = (req, res, next) => {
  userService.create(req.body)
    .then(() => res.json({
      success: true,
      message: 'Registration completed, you can now login with your username and password',
    }))
    .catch(err => next(err));
};

exports.delete = (req, res, next) => {
  userService.delete(req.params.id)
    .then(() => res.json({
      success: true,
    }))
    .catch(err => next(err));
};

exports.authenticate = (req, res, next) => {
  userService.authenticate(req.body)
    .then((user) => {
      if (user) {
        return res.json(user);
      }
      return res.status(400).json({ message: 'Username or password is incorrect' });
    })
    .catch(err => next(err));
};
