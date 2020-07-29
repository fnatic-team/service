const express = require('express');
const router = express.Router();

const { verifyToken } = require('../../helpers/token');

const { userLogin } = require('./controller');

router.post('/login', userLogin);

const { Registration } = require('./controller');

router.post('/', Registration);

module.exports = router;
