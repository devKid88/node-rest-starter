// Use model
const ItemModel = require('./item.model');

exports.findAll = () => {
  return ItemModel.find()
    .sort({
      date: -1
    });
}

exports.getById = (id) => {
  return ItemModel.findById(id);
}

exports.create = (itemParams) => {
  const newItem = new ItemModel({
    name: itemParams.name
  });

  return newItem.save();
}

exports.delete = (id) => {
  return ItemModel.findByIdAndRemove(id);
}