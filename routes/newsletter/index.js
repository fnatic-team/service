const express = require('express');
const router = express.Router();

router.post('/addnewsletter', require('./controller').addNewsletter);
router.get('/getallnewsletter', require('./controller').getAllNewsletter);

module.exports = router;
