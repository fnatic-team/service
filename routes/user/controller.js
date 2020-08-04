const { User } = require('../../models');
const { hashPassword } = require('../../helpers');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../helpers/token');

module.exports = {
    Registration: async (req, res) => {
        try {
            const checkedUser = await User.findOne({ email: req.body.email });

            if (req.body.category !== undefined) {
                req.body.role = 'SPEAKER';
            } else if (
                req.body.category === undefined &&
                req.body.status === undefined
            ) {
                req.body.status = 'ACTIVE';
            }

            if (checkedUser) {
                return res.send({
                    message: `Email is already registered`,
                });
            }

            req.body.password = await hashPassword(req.body.password);

            const result = await User.create({
                ...req.body,
            });

            res.send({
                message: `Registration success`,
            });
        } catch (error) {
            console.error(error);
        }
    },

    userLogin: async (req, res) => {
        const { email, password } = req.body;

        try {
            const registeredUser = await User.findOne({
                email,
            });

            if (registeredUser) {
                bcrypt
                    .compare(password, registeredUser.password)
                    .then((result) => {
                        if (result === true) {
                            const userData = {
                                id: registeredUser._id,
                                name: registeredUser.name,
                                email: registeredUser.email,
                                role: registeredUser.role,
                                status: registeredUser.status,
                            };

                            const token = createToken(userData);
                            res.send({
                                message: `Login Succesfull`,
                                token,
                            });
                        } else {
                            return res.send(`Your email or password is wrong`);
                        }
                    });
            } else {
                res.send(`Your email is not registered`);
            }
        } catch (error) {
            res.send(error);
        }
    },
    updateProfil: async (req, res) => {
        const id = req.params.id;

        try {
            const result = await User.findByIdAndUpdate(
                { _id: id },
                {
                    ...req.body,
                }
            );

            res.send({ message: 'success update profil', data: result });
        } catch (error) {
            res.send(error);
        }
    },
    getAllUser: async (req, res) => {
        try {
            const result = await User.find();

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    getAllAudience: async (req, res) => {
        try {
            const result = await User.find({ role: 'AUDIENCE' });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    getAllSpeaker: async (req, res) => {
        try {
            const result = await User.find({ role: 'SPEAKER' });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    filterByCategory: async (req, res) => {
        const category = req.query.category;
        try {
            const result = await User.find({
                role: 'SPEAKER',
                status: 'ACTIVE',
                category: {
                    $regex: category,
                    $options: 'i',
                },
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    getUser: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await User.findById(id);

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    getSpeaker: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await User.findById({ _id: id, role: 'SPEAKER' });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    filterSpeakerByName: async (req, res) => {
        const user = req.query.user;
        try {
            const result = await User.find({
                role: 'SPEAKER',
                status: 'ACTIVE',
                name: {
                    $regex: user,
                    $options: 'i',
                },
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    filterUserByName: async (req, res) => {
        const user = req.query.user;
        try {
            const result = await User.find({
                name: {
                    $regex: user,
                    $options: 'i',
                },
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },

    filterByLocation: async (req, res) => {
        const location = req.query.location;
        try {
            const result = await User.find({
                role: 'SPEAKER',
                status: 'ACTIVE',
                location: {
                    $regex: location,
                    $options: 'i',
                },
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },

    getActiveSpeaker: async (req, res) => {
        try {
            const result = await User.find({
                role: 'SPEAKER',
                status: 'ACTIVE',
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    getInActiveSpeaker: async (req, res) => {
        try {
            const result = await User.find({
                role: 'SPEAKER',
                status: 'INACTIVE',
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    deleteUser: async (req, res) => {
        const id = req.params.id;
        try {
            await User.findByIdAndDelete(id);

            res.send({ message: 'deleted' });
        } catch (error) {
            res.send(error);
        }
    },
};
