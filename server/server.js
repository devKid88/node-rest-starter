const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// api
const itemsApi = require('./item');


const app = express();

app.use(bodyParser.json());

// DB config
const db = require('../config/keys').mongoURI;

// Connect to mongo
mongoose.connect(db)
    .then(() => console.log('Conected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/items', itemsApi)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
        