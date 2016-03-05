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

// Adding new invoice
router.post('/', (req, res) => {
    let invoice = req.body;
    Invoice.addInvoice(invoice, (err, invoice) => {
        if (err) throw err;

        res.json(invoice);
    });
});

// Updating an invoice
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let invoice = req.body;
    Invoice.updateInvoice(id, invoice, {}, (err, invoice) => {
        if (err) throw err;

        res.json(invoice);
    });
});


module.exports = router;
