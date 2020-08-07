const passport = require('passport');
const { createToken } = require('../helpers/token');

const facebookAuthenticate = (req, res, next) => {
    try {
        passport.authenticate(
            'facebook',
            { session: false },
            async (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.json({ message: info.message });
                }

                const token = await createToken({
                    email: user.email,
                    id: user.id,
                });

                req.token = token;

                next();
            }
        )(req, res, next);
    } catch (error) {
        console.log(error);
        return res.json({ message: info.message });
    }
};

const googleAuthenticate = (req, res, next) => {
    try {
        passport.authenticate(
            'google',
            { session: false },
            async (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.json({ message: info.message });
                }

                const token = await createToken({
                    email: user.email,
                    id: user.id,
                });

                req.token = token;

                next();
            }
        )(req, res, next);
    } catch (error) {
        console.log(error);
        return res.json({ message: info.message });
    }
};

const jwtAuthenticate = (req, res, next) => {
    try {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json({ message: info.message });
            }

            next();
        })(req, res, next);
    } catch (error) {
        return res.json({ message: info.message });
    }
};

module.exports = {
    facebookAuthenticate,
    googleAuthenticate,
    jwtAuthenticate,
};
