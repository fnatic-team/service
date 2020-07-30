const express = require('express');
const router = express.Router();

router.post('/addpayment', require('./controller').addPayment);
router.get('/', require('./controller').getPayment);

module.exports = router;
