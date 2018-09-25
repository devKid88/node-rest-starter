const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');

const UserModel = require('./user.model');

exports.findAll = () => UserModel.find().sort({ date: -1 });

exports.getById = id => UserModel.findById(id);

exports.delete = id => UserModel.findByIdAndRemove(id);

exports.create = async (userParams) => {
  if (await UserModel.findOne({ username: userParams.username })) {
    throw new Error(`Username ${userParams.username} is already taken.`);
  }

  const user = new UserModel(userParams);

  if (userParams.password) {
    user.hash = bcrypt.hashSync(userParams.password, 10);
  }

  return user.save();
};

exports.authenticate = async ({ username, password }) => {
  const user = await UserModel.findOne({ username });

  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({
      sub: user.id,
    }, keys.secret);
    return {
      ...userWithoutHash,
      token,
    };
  }

  return Promise.resolve();
};
