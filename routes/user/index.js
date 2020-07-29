const express = require('express');
const router = express.Router();
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
router.put('/:id', updateProfil);
router.get('/allUser', getAllUser);
router.get('/audience', getAllAudience);
router.get('/speaker', getAllSpeaker);
router.get('/:id', getUser);
router.get('/category/', filterByCategory);
router.get('/name/', filterByName);
router.delete('/:id', deleteUser);

module.exports = router;
