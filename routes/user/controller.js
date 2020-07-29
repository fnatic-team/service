const { User } = require('../../models');
const { hashPassword } = require('../../helpers');

module.exports = {
    Registration: async (req, res) => {
        const { name, username, email, password, phone, role, cv } = req.body;
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
                username,
                email,
                password: hashedPassword,
                role,
                phone,
                cv,
            });
            res.send({ message: 'success', data: result });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
};
