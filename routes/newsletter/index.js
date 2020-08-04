const express = require('express');
const { deleteNewsletter } = require('./controller');
const { verifyToken } = require('../../helpers/token');
const router = express.Router();

router.post('/addnewsletter', require('./controller').addNewsletter);
router.get('/getallnewsletter', require('./controller').getAllNewsletter);
router.put('/:id', require('./controller').updateNewsletter);
router.delete('/:id', deleteNewsletter);

module.exports = router;
