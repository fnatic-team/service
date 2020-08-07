const { hashPassword } = require('./bcrypt');
const { createToken, verifyToken } = require('./token');
const {
    facebookAuthenticate,
    googleAuthenticate,
    jwtAuthenticate,
} = require('./auth');
const strategies = require('./strategies');

module.exports = {
    createToken,
    verifyToken,
    hashPassword,
    facebookAuthenticate,
    googleAuthenticate,
    strategies,
    jwtAuthenticate,
};
