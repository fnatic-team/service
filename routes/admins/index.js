const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    adminLogin,
    addAdmin,
    getAllAdmin,
    updateAdmin,
    deleteAdmin,
    getAllSpeakerActive,
    getAllSpeakerUnverified,
    getAllSpeakerInactive,
    getAllAudienceActive,
    getAllAudienceInactive
} = require('./controller');

router.post('/add/:roles', addAdmin);
router.post('/login', adminLogin);
router.get('/getAllAdmin', verifyToken, getAllAdmin);
router.put('/:id', verifyToken, updateAdmin);
router.delete('/:id', verifyToken, deleteAdmin);
router.get('/getallspeakeractive', verifyToken, getAllSpeakerActive);
router.get('/getallspeakerunverified', verifyToken, getAllSpeakerUnverified);
router.get('/getallspeakerinactive', verifyToken, getAllSpeakerInactive);
router.get('/getallaudienceactive', verifyToken, getAllAudienceActive);
router.get('/getallaudienceinactive', verifyToken, getAllAudienceInactive);

module.exports = router;