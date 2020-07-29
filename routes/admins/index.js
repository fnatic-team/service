const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    adminLogin,
    addAdmin,
    getAllAdmin,
} = require('./controller');

router.post('/', addAdmin);
router.post('/login', adminLogin);
router.get('/getAllAdmin', verifyToken, getAllAdmin);

module.exports = router;