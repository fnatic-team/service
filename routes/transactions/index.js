const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');
const { getTrasnId } = require('./controller');

router.post(
    '/addtransaction',
    verifyToken,
    require('./controller').addTransaction
);
router.put(
    '/update/:id',
    verifyToken,
    require('./controller').updateTransaction
);
router.delete(
    '/delete/:id',
    verifyToken,
    require('./controller').deleteTransaction
);

router.get('/alltrans', verifyToken, require('./controller').getTransaction);

router.get('/name/', verifyToken, require('./controller').filterByName);
router.get('/transId/:id', verifyToken, getTrasnId);

module.exports = router;
