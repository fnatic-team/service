const User = require('../../models');
const { hashPassword } = require('../../helpers');

module.exports = {
    Registration: async (req, res) => {
        const { name, email, password, phone, role } = req.body;
        try {
            const checkedUser = await User.findOne({ email });

            if (checkedUser) {
                return res.send({
                    message: `Email is already registered`,
                });
            }

            const hashedPassword = await hashPassword(password);

            const result = await User.create({
                name,
                email,
                password: hashedPassword,
                role,
                phone,
            });
            res.send({ message: 'success', data: result });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },

    createProfil: async (req, res) => {
        try {
        } catch (error) {}
    },
};
