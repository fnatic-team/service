require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI_LOCAL: process.env.MONGODB_URI_LOCAL,
    MONGODB_URI_LIVE: process.env.MONGODB_URI_LIVE,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_API_SECRET: process.env.GOOGLE_API_SECRET,
    FACEBOOK_API_KEY: process.env.FACEBOOK_API_KEY,
    FACEBOOK_API_SECRET: process.env.FACEBOOK_API_SECRET,
};
