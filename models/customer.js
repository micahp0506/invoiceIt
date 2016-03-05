'use strict';


const mongoose = require('mongoose');

// Customer Schema
const Customer = mongoose.model('customer', mongoose.Schema
    ({
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: false
        },
        logo_url: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: false
        },
        address: {
            street: String,
            city: String,
            state: String,
            zip: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }));

module.exports = Customer;

// Get customers
module.exports.getCustomers = function (cb, limit) {
    Customer.find(cb).limit(limit).sort([['first_name', 'ascending']]);
};

// Get customers by ID
module.exports.getCustomerById = function (id, cb) {
    Customer.findById(id, cb);
};

// Add customer
module.exports.addCustomer = function (customer, cb) {
    console.log(customer);
    let add = {
        first_name: customer.first_name,
        last_name: customer.last_name,
        company: customer.company,
        logo_url: customer.logo_url,
        email: customer.email,
        phone: customer.phone,
        address: {
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            zip: customer.address.zip
        }
    };
    console.log(add.address.street);
    Customer.create(add, cb);
};

// Update customer
module.exports.updateCustomer = function (id, customer, options, cb) {
    let query = {_id: id}
    let update = {
        first_name: customer.first_name,
        last_name: customer.last_name,
        company: customer.company,
        logo_url: customer.logo_url,
        email: customer.email,
        phone: customer.phone,
        address: {
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            zip: customer.address.zip
        }
    };
    Customer.findOneAndUpdate(query, update, options, cb);
};











