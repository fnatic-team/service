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
    event: {
        type: String,
        default: 'admin',
    },
    location: {
        type: String,
        required: true,
    },
    timing: {
        type: Date,
        required,
    },
    audiences: {
        type: String,
    },
    duration: {
        type: String,
        required,
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
