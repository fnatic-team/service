const express = require('express');
const router = express.Router();
const verifyToken = require('../../helpers/token');
const { Registration } = require('./controller');

router.post('/', Registration);

module.exports = router;
