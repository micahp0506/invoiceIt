'use strict';

// Requiring necessary modules and dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const customers = require('./routes/customers');
const invoices = require('./routes/invoices');


// Defining PORT, 3000 or process.env
const PORT = process.env.PORT || 3000;

// MongoDB and mLab connection
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';


const MONGODB_URL_PREFIX = MONGODB_USER ? `${MONGODB_USER}:${MONGODB_PASS}@` : '';

const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/invoiceit`;

app.use(express.static('client'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Please use /api/customers or /api/invoices");
});

app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

// Mongoose connection
mongoose.connect(MONGODB_URL);
mongoose.connection.on('open', () => {
  console.log('MONGO OPEN');
  app.listen(PORT, () => {
  console.log(`Node.js server has started. Listening on port ${PORT}`);
  });
})


module.exports = app;
