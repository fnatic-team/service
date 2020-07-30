const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = Schema({
    name: {
        type: String,
        ref: 'users',
    },
    UserID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    nama_acara: {
        type: String,
        required: true,
    },
    waktu_acara: {
        type: String,
        required: true,
    },
    tanggal_acara: {
        type: Date,
        required: true,
    },
    kota: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
    },
    jml_peserta: {
        type: String,
    },
    durasi: {
        type: String,
        required: true,
    },
    deskripsi: {
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
