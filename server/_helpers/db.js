const mongoose = require('mongoose');
const db = require('../../config/keys').mongoURI;

// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Conected'))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = {
  // User: require('../users/user.model'),
  // Item: require('../item/item.model'),
};
