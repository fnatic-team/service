const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        Type: String,
        required: true,
    },
    email: {
        Type: String,
        unique: true,
        required: true,
    },
    username: {
        Type: String,
        required: true,
    },
    password: {
        Type: String,
        required: true,
    },
    phone: {
        Type: Number,
    },
    role: {
        Type: String,
        default: 'audience',
    },
    status: {
        Type: String,
        default: 'pending',
    },
    profil: [
        {
            Type: Schema.Types.ObjectId,
            ref: 'profil',
        },
    ],
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
