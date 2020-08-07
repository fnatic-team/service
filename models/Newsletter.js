const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsletterSchema = Schema({
    email:{
        type: String,
        unique: true,
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
const Newsletter = mongoose.model(`newsletters`, newsletterSchema);

module.exports= Newsletter;
