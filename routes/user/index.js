const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    Registration,
    userLogin,
    updateProfil,
    getAllUser,
    getAllAudience,
    getAllSpeaker,
    getUser,
    filterByCategory,
    filterByName,
    deleteUser,
} = require('./controller');

router.post('/', Registration);
router.post('/login', userLogin);
router.put('/:id', verifyToken, updateProfil);
router.get('/allUser', verifyToken, getAllUser);
router.get('/audience', verifyToken, getAllAudience);
router.get('/speaker', verifyToken, getAllSpeaker);
router.get('/:id', verifyToken, getUser);
router.get('/category/', verifyToken, filterByCategory);
router.get('/name/', verifyToken, filterByName);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
