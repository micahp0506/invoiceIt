'use strict';


const mongoose = require('mongoose');

// Customer Schema
const Invoice = mongoose.model('invoice', mongoose.Schema
    ({
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        },
        service: {
            type: String,
            required: true
        },
        price: {
            type: String
        },
        due: {
            type: String
        },
        status: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }));

module.exports = Invoice;

// Get Invoices
module.exports.getInvoices = function (cb, limit) {
    Invoice.find(cb).limit(limit).sort([['createdAt', 'descending']]);
};

// Get Invoice by id
module.exports.getInvoiceById = function (id, cb) {
    Invoice.findById(id, cb);
};

// Add invoice
module.exports.addInvoice = function (invoice, cb) {
    console.log(invoice);
    let add = {
        customer: invoice.customer,
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    }
    console.log(add.customer);
    Invoice.create(add, cb);
};

// Update invoice
module.exports.updateInvoice = function (id, invoice, options, cb) {
    let query = {_id: id};
    let update = {
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    };
    Invoice.findOneAndUpdate(query, update, options, cb);
};















