const { Payment } = require('../../models');

module.exports = {
    getTransaksi: async (req, res) => {
        try {
            const result = await Payment.find();
            res.send({ message: 'get all data', data: result });
        } catch (error) {
            res.send(error);
        }
    },
    addTransaksi: async (req, res) => {
        try {
            const result = await Payment.create({
                ...req.body,
            });
            res.send({ message: 'transaksi berhasil', data: result });
        } catch (error) {
            res.status(403).send({ message: 'forbidden' });
            res.send(error);
        }
    },
};
