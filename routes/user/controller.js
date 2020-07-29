
const { User} = require('../../models');
const { hashPassword } = require('../../helpers');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../helpers/token');

module.exports = {
    Registration: async (req, res) => {
        try {
            const checkedUser = await User.findOne({ email: req.body.email });

            if (req.body.category !== undefined) {
                req.body.role = 'speaker';
            }

            if (checkedUser) {
                return res.send({
                    message: `Email is already registered`,
                });
            }
            const hashedPassword = await hashPassword(password);

            await User.create({
                name,
                email,
                password: hashedPassword,
            });

            res.send({
                message: `Registration success`,
            });
        } catch (error) {
            console.error(error);
        }
    },
    createProfil: async (req, res) => {
        try {
        } catch (error) {}
    },
    userLogin: async (req, res) => {
        const { email, password } = req.body;

        const registeredUser = await User.findOne({
            email,
        });

        if (registeredUser) {
            bcrypt.compare(password, registeredUser.password).then((result) => {
                if (result === true) {
                    const userData = {
                        id: registeredUser._id,
                        name: registeredUser.name,
                        email: registeredUser.email,
                        role: registeredUser.role,
                    };

                    const token = createToken(userData);
                    res.send({
                        message: `Login Succesfull`,
                        token,
                        userData,
                    });
                } else {
                    return res.send(`Your email or password is wrong`);
                }
            });
        }else {
            res.send(`Your email is not registered`);
        }
    }
}

