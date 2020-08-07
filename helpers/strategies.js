var passport = require('passport');
var { User } = require('../models');
var FacebookTokenStrategy = require('passport-facebook-token');
var GoogleTokenStrategy = require('passport-google-token').Strategy;
var {
    GOOGLE_API_KEY,
    GOOGLE_API_SECRET,
    FACEBOOK_API_KEY,
    FACEBOOK_API_SECRET,
} = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { JWT_SECRET } = require('../config/environment');
const localStrategy = require('passport-local').Strategy;

const strategies = () => {
    passport.use(
        'login',
        new localStrategy(
            {
                passReqToCallback: true,
            },
            async (req, email, password, done) => {
                try {
                    //Find the user associated with the email provided by the user
                    const user = await User.findOne({
                        email: email,
                    });

                    if (!user) {
                        //If the user isn't found in the database, return a message
                        return done(null, false, { message: 'User not found' });
                    }
                    // Validate password and make sure it matches with the corresponding hash stored in the database
                    // If the passwords match, it returns a value of true.
                    const validate = await compare(password, user.password);
                    if (!validate) {
                        return done(null, false, { message: 'Wrong Password' });
                    } else {
                        //Send the user information to the next middleware
                        return done(null, user, {
                            message: 'Logged in Successfully',
                        });
                    }
                } catch (error) {
                    return done(error);
                }
            }
        )
    );

    passport.use(
        'facebook',
        new FacebookTokenStrategy(
            {
                clientID: FACEBOOK_API_KEY,
                clientSecret: FACEBOOK_API_SECRET,
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await User.findOne({
                        'facebookProvider.id': profile.id,
                    });

                    if (!user) {
                        const newUser = await User.create({
                            name: profile.displayName,
                            username: 'usernameloginfb',
                            password: 'passwordloginfb',
                            email: profile.emails[0].value,
                            image: profile.photos[0].value,
                            status: 'ACTIVE',
                            facebookProvider: {
                                id: profile.id,
                                token: accessToken,
                            },
                            isSosialLogin: true,
                        });

                        return done(null, newUser);
                    } else {
                        return done(null, user);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        )
    );

    passport.use(
        'google',
        new GoogleTokenStrategy(
            {
                clientID: GOOGLE_API_KEY,
                clientSecret: GOOGLE_API_SECRET,
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await User.findOne({
                        'googleProvider.id': profile.id,
                    });

                    if (!user) {
                        const newUser = await User.create({
                            name: profile.displayName,
                            username: 'usernamelogingoogle',
                            password: 'passwordlogingoogle',
                            email: profile.emails[0].value,
                            image: profile._json.picture,
                            status: 'ACTIVE',
                            googleProvider: {
                                id: profile.id,
                                token: accessToken,
                            },
                            isSosialLogin: true,
                        });
                        return done(null, newUser);
                    } else {
                        return done(null, user);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        )
    );

    passport.use(
        'jwt',
        new JwtStrategy(
            {
                jwtFromRequest: ExtractJWT.fromExtractors([
                    ExtractJWT.fromUrlQueryParameter('secret_token'),
                    ExtractJWT.fromHeader('secret_token'),
                    ExtractJWT.fromAuthHeaderAsBearerToken(),
                ]),
                secretOrKey: JWT_SECRET,
            },
            async (jwt_payload, done) => {
                try {
                    const user = await User.findOne({
                        email: jwt_payload.email,
                    });

                    if (!user) {
                        return done(err, false, { message: 'User not Found' });
                    } else {
                        return done(null, user);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        )
    );
};

module.exports = strategies;
