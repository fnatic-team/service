const express = require('express');
const router = express.Router();
const { Registration } = require('./controller');

router.post('/', Registration);

module.exports = router;
