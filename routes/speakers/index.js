const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    userRegistration,
    userLogin,
} = require('./controller');

router.post('/', userRegistration);
router.post('/login', userLogin);

module.exports = router;
