const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// Use model
const UserModel = require('./user.model');

exports.findAll = () => {
  return UserModel.find()
    .sort({
      date: -1
    });
}

exports.getById = (id) => {
  return UserModel.findById(id);
}

exports.create = async (userParams) => {

  if (!userParams.firstName) {
    throw `Unable to register, please provide First Name.`
  }

  if (!userParams.lastName) {
    throw `Unable to register, please provide Last Name.`
  }

  if (!userParams.username) {
    throw `Unable to register, please provide username.`
  }

  if (!userParams.password) {
    throw `Unable to register, please provide password.`
  }

  if (await UserModel.findOne({
      username: userParams.username
    })) {
    throw `Username ${userParams.username} is already taken.`;
  }

  const user = new UserModel(userParams);

  if (userParams.password) {
    user.hash = bcrypt.hashSync(userParams.password, 10);
  }

  return user.save();
}

exports.delete = (id) => {
  return UserModel.findByIdAndRemove(id);
}

exports.authenticate = async ({
  username,
  password
}) => {
  const user = await UserModel.findOne({username});

  if (user && bcrypt.compareSync(password, user.hash)) {
    const {
      hash,
      ...userWithouthHash
    } = user.toObject();
    const token = jwt.sign({
      sub: user.id
    }, keys.secred);
    return {
      ...userWithouthHash,
      token
    };
  }

}