const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        default: 'audience',
    },
    category: {
        type: String,
    },
    status: {
        type: String,
        default: 'pending',
    },
    bio: {
        type: String,
    },
    image: {
        type: String,
    },
    language: {
        type: String,
    },
    address: {
        type: String,
    },
    location: {
        type: String,
    },
    fee: {
        type: String,
    },
    cv: {
        type: String,
    },
    rating: {
        type: Number,
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

const User = mongoose.model(`users`, userSchema);

module.exports = User;
