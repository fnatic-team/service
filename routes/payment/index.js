const express = require('express');
const router = express.Router();

router.post('/addpayment', require('./controller').addPayment);
router.get('/', require('./controller').getPayment);
router.put('/:id', require('./controller').updatePayment);
router.delete('/:id', require('./controller').deletePayment);

module.exports = router;
