const { Payment } = require('../../models');

module.exports = {
    getPayment: async (req, res) => {
        try {
            const result = await Payment.find();

            res.send({ message: 'Get All Transaksi', data: result });
        } catch (error) {
            res.send(error);
        }
    },

    addPayment: async (req, res) => {
        try {
            const result = await House.create({
                ...req.body,
            });

            res.send({ message: 'Transaksi Berhasil', data: result });
        } catch (error) {
            res.send(error);
        }
    },
};
