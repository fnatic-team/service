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
        type: Number,
    },
    role: {
        type: String,
        default: 'audience',
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
        default: '',
    },
    fee: {
        type: Number,
        default: 0,
    },
    experience: {
        type: String,
        default: '',
    },
    education: {
        type: String,
        default: '',
    },
    experienceYear: {
        type: Array,
        default: '',
    },
    educationYear: {
        type: Array,
        default: '',
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

const User = mongoose.model(`user`, userSchema);

module.exports = User;
