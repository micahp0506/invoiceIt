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

// Add new invoice
router.post('/', (req, res) => {
    let invoice = req.body;
    Invoice.addInvoice(invoice, (err, invoice) => {
        if (err) throw err;

        res.json(invoice);
    });
});

// Update an invoice
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let invoice = req.body;
    Invoice.updateInvoice(id, invoice, {}, (err, invoice) => {
        if (err) throw err;

        res.json(invoice);
    });
});

// Delete invoice
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let invoice = req.body;
    Invoice.removeInvoice(id, (err, invoice) => {
        if (err) throw err;

        res.json(invoice);
    });
});

// Get all invoices for specific customer
router.get('/customer/:customer_id', (req, res) => {
    let customer_id = req.params.customer_id;
    Invoice.getCustomerInvoices(customer_id, (err, invoices) => {
        if (err) throw err;

        res.json(invoices);
    })
})

module.exports = router;
