const { User } = require('../../models');
const { hashPassword } = require('../../helpers');

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

          req.body.password = await hashPassword(req.body.password);

            const result = await User.create({
                ...req.body
            });
            res.send({ message: 'success', data: result });
        } catch (error) {
            res.send(error);
        }
    },
    
    
};
