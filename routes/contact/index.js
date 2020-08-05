const express = require('express');
const router = express.Router();

const { addMessage, getMessage, deleteMessage } = require('./controller');
const { verifyToken } = require('../../helpers/token');

router.post('/add', addMessage);
router.get('/all', verifyToken, getMessage);
router.delete('/delete/:id', verifyToken, deleteMessage);

module.exports = router;
