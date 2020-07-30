const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    name_event: {
        type: String,
    },
    timing: {
        type: String,
    },
    dates: {
        type: Date,
    },
    cities: {
        type: String,
    },
    address: {
        type: String,
    },
    audiences: {
        type: String,
    },
    duration: {
        type: String,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Payment = mongoose.model(`payments`, paymentSchema);

module.exports = Payment;
