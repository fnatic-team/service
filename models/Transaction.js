const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = Schema({
    name: {
        type: String,
        ref: 'users',
    },
    audienceID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    speakerID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    adminID: {
        type: Schema.Types.ObjectId,
        ref: 'admins',
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
        type: Number,
        default: 0,
    },
    durasi: {
        type: Number,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    bukti_transaksi: {
        type: String,
    },
    jumlah_bayar: {
        type: Number,
        default: 0,
    },
    status_speaker: {
        type: String,
        default: 'PENDING',
    },
    status_audience: {
        type: String,
        default: 'PENDING',
    },
    status_transaksi: {
        type: String,
        default: 'MENUNGGU KONFIRMASI SPEAKER',
    },
    penyelenggara: {
        type: String,
    },
     bukti_trans_adm: {
        type: String,
    },
    nom_trans_adm: {
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

const Transaction = mongoose.model(`transactions`, transactionSchema);

module.exports = Transaction;
