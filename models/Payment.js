const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    event: {
        type: String,
        default: 'admin',
    },
    location: {
        type: String,
    },
    theme: {
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

const Payment = mongoose.model(`payment`, paymentSchema);

module.exports = Payment;
