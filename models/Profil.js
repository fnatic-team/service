const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profilSchema = Schema({
    bio: {
        Type: String,
        default: '',
    },
    motivation: {
        Type: String,
        default: '',
    },
    image: {
        Type: String,
    },
    location: {
        Type: String,
        default: '',
    },
    fee: {
        Type: Number,
        default: 0,
    },
    user: {
        Type: Schema.Types.ObjectId,
        ref: 'user',
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

const Profil = mongoose.model(`profil`, profilSchema);

module.exports = Profil;
