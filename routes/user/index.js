const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    userLogin,
} = require('./controller');


router.post('/', userLogin);

module.exports = router;
