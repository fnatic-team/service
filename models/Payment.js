const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = Schema({
    name: {
        type: String,
    },
    location: {
        type: String,
        required: true,
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
    location: {
        type: String,
        required: true,
    },
    timing: {
        type: Date,
        required: true,
    },
    audiences: {
        type: String,
    },
    duration: {
        type: String,
        required: true,
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
