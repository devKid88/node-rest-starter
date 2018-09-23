const db = require('../../config/keys').mongoURI;
const mongoose = require('mongoose');

// Connect to mongo
mongoose.connect(db)
    .then(() => console.log('Conected'))
    .catch(err => console.log(err));
mongoose.Promise = global.Promise;

module.exports = {
    // User: require('../users/user.model')
    Item: require('../item/item.model')
};