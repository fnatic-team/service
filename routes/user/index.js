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
    filterUserByName,
    filterSpeakerByName,
    deleteUser,
    filterByLocation,
    getActiveSpeaker,
    getInActiveSpeaker,
} = require('./controller');

router.post('/', Registration);
router.post('/login', userLogin);
router.put('/:id', verifyToken, updateProfil);
router.get('/allUser', verifyToken, getAllUser);
router.get('/audience', verifyToken, getAllAudience);
router.get('/speaker', verifyToken, getAllSpeaker);
router.get('/userId/:id', verifyToken, getUser);
router.get('/category/', filterByCategory);
router.get('/name/', filterUserByName);
router.get('/speakerName/', filterSpeakerByName);
router.get('/location/', filterByLocation);
router.get('/activeSpeaker', getActiveSpeaker);
router.get('/InActiveSpeaker', verifyToken, getInActiveSpeaker);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
