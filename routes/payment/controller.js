const { Payment } = require('../../models');

module.exports = {
    getPayment: async (req, res) => {
        try {
            const result = await Payment.find().populate('UserID');

            res.send({ message: 'Get All Transaksi', data: result });
        } catch (error) {
            res.send(error);
        }
    },

    addPayment: async (req, res) => {
        try {
            const result = await Payment.create({
                ...req.body,
            });

            res.send({ message: 'Hiring Success', data: result });
        } catch (error) {
            res.send(error);
        }
    },

    updatePayment: async (req, res) => {
        const { id } = req.params;
        try {
            const results = await Payment.findByIdAndUpdate(id, {
                $set: {
                    ...req.body,
                },
            });

            res.send({
                message: `Update data succcess`,
                results: results,
            });
        } catch (error) {
            res.send(error);
        }
    },

    deletePayment: async (req, res) => {
        const { id } = req.params;

        try {
            const results = await Payment.deleteOne({
                _id: id,
            });
            res.send({
                message: `Delete data succcess`,
                results: results,
            });
        } catch (error) {
            res.send(error);
        }
    },
};
