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
        default: 'none',
    },
    status: {
        type: String,
        default: 'pending',
    },
    bio: {
        type: String,
        default: '',
    },
    motivation: {
        type: String,
        default: '',
    },
    image: {
        type: String,
    },
    location: {
        type: String,
        default: 'none',
    },
    fee: {
        type: String,
        default: 'none',
    },
    cv: {
        type: String,
        default: 'none',
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