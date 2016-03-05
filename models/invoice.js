'use strict';


const mongoose = require('mongoose');

// Customer Schema
const Invoice = mongoose.model('invoice', mongoose.Schema
    ({
        cusotmer: {
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
    Invoice.find(cb).limit(limit).sort([['createdAt', 'decending']]);
};

// Get Invoice by id
module.exports.getInvoiceById = function (id, cb) {
    Invoice.findById(id, cb).limit(limit);
};

