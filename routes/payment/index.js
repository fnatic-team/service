const router = require('express').Router();

//Routes CRUD Transaksi
router.get('/', require('./controller').getTransaksi);
router.post('/', require('./controller').addTransaksi);
