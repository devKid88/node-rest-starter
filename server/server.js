const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

// api
const itemApi = require('./item');
const userApi = require('./user');

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// DB config
const db = require('../config/keys').mongoURI;

// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Conected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/items', itemApi);
app.use('/api/users', userApi);

// global error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
