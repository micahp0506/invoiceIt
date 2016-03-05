'use strict';


const express = require('express');
const router = express.Router();

const Customer = require('../models/customer');
const Invoice = require('../models/invoice');

// Get all invoices
router.get('/', (req, res) => {
    Invoice.getInvoices((err, invoices) => {
        if (err) throw (err);

        res.json(invoices);
    });
});

// Get invoice by id
router.get('/:id', (req, res) => {
    Invoice.getInvoiceById(req.params.id, (err, invoice) => {
        if (err) throw (err);

        res.json(invoice);
    });
});

module.exports = router;
