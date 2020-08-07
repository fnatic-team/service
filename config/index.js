const {
    PORT,
    MONGODB_URI_LIVE,
    MONGODB_URI_LOCAL,
    JWT_SECRET,
    GOOGLE_API_KEY,
    GOOGLE_API_SECRET,
    FACEBOOK_API_KEY,
    FACEBOOK_API_SECRET,
} = require('./environment');
const db = require('./database');

module.exports = {
    PORT,
    MONGODB_URI_LIVE,
    MONGODB_URI_LOCAL,
    JWT_SECRET,
    GOOGLE_API_KEY,
    GOOGLE_API_SECRET,
    FACEBOOK_API_KEY,
    FACEBOOK_API_SECRET,
    db,
};
