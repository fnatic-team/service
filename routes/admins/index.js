const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    adminLogin,
    addAdmin,
    getAllAdmin,
    updateAdmin,
    deleteAdmin
} = require('./controller');

router.post('/:roles', addAdmin);
router.post('/login', adminLogin);
router.get('/getAllAdmin', verifyToken, getAllAdmin);
router.put('/:id', verifyToken, updateAdmin);
router.delete('/:id', verifyToken, deleteAdmin);

module.exports = router;