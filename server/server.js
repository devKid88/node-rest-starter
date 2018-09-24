const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// api
const itemApi = require('./item');
const userApi = require('./user');

const app = express();

app.use(bodyParser.json());

// DB config
const db = require('../config/keys').mongoURI;

// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Conected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/items', itemApi);
app.use('/api/users', userApi);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
