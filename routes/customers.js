'use strict';


const express = require('express');
const router = express.Router();

const Customer = require('../models/customer');
const Invoice = require('../models/invoice');

// Get all customers
router.get('/', (req, res) => {
    Customer.getCustomers((err, customers) => {
        if (err) throw err;

        res.json(customers);
    });
});

// Get customer by id
router.get('/:id', (req, res) => {
    Customer.getCustomerById(req.params.id, (err, customer) => {
        if (err) throw (err);

        res.json(customer);
    });
});

// Add customer
router.post('/', (req, res) => {
    let customer = req.body;
    Customer.addCustomer(customer, (err, customer) => {
        if(err) throw err;

        res.json(customer);
    });
});

// Update customer
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let customer = req.body;
    Customer.updateCustomer(id, customer, {}, (err, customer) => {
        if (err) throw err;

        res.json(customer);
    });
});

// Delete customer
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Customer.removeCustomer(id, (err, customer) => {
        if (err) throw err;

        res.json(customer);
    });
});

module.exports = router;
