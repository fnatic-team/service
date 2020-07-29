const express = require('express');
const router = express.Router();

//Route CRUD Transaksi

router.get('/', require('./controller').getTransaksi);

module.exports = router;
