'use strict';

// Requiring necessary modules and dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const customers = require('./routes/customers');
const invoices = require('./routes/invoices');

// Mongoose connection
mongoose.connect('mongodb://localhost/invoiceit');
const db = mongoose.connection;
// Defining PORT, 3000 or process.env
const PORT = process.env.PORT || 3000;

app.use(express.static('client'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Please use /api/customers or /api/invoices");
});

app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

// Server listening
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


module.exports = app;
