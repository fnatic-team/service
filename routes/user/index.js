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
    getSpeaker,
    getPendingSpeaker,
    updateUserAdmin,
    facebookAuthenticated,
    googleAuthenticated,
    getAllLocation,
} = require('./controller');
const {
    facebookAuthenticate,
    googleAuthenticate,
} = require('../../helpers/auth');

router.post('/', Registration);
router.post('/login', userLogin);
router.put('/:id', verifyToken, updateProfil);
router.put('/editAdmin/:id', verifyToken, updateUserAdmin);
router.get('/allUser', verifyToken, getAllUser);
router.get('/audience', verifyToken, getAllAudience);
router.get('/speaker', verifyToken, getAllSpeaker);
router.get('/userId/:id', verifyToken, getUser);
router.get('/category/', filterByCategory);
router.get('/name/', filterUserByName);
router.get('/speakerName/', filterSpeakerByName);
router.get('/location/', filterByLocation);
router.get('/activeSpeaker', getActiveSpeaker);
router.get('/activeSpeaker/:id', getSpeaker);
router.get('/pendingSpeaker', verifyToken, getPendingSpeaker);
router.get('/InActiveSpeaker', verifyToken, getInActiveSpeaker);
router.get('/userLocation', getAllLocation);
router.delete('/:id', verifyToken, deleteUser);

router.post('/auth/facebook', facebookAuthenticate, facebookAuthenticated);
router.post('/auth/google', googleAuthenticate, googleAuthenticated);

module.exports = router;
