const ItemModel = require('./item.model');

exports.findAll = () => ItemModel.find().sort({
  date: -1,
});

exports.getById = id => ItemModel.findById(id);

exports.create = (itemParams) => {
  const newItem = new ItemModel({
    name: itemParams.name,
  });

  return newItem.save();
};

exports.delete = id => ItemModel.findByIdAndRemove(id);
