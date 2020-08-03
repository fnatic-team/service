const { Transaction } = require('../../models');

module.exports = {
    getTransaction: async (req, res) => {
        try {
            const result = await Transaction.find()
                .populate('speakerID')
                .populate('audienceID');

            res.send({ message: 'Get All Transaksi', data: result });
        } catch (error) {
            res.send(error);
        }
    },

    addTransaction: async (req, res) => {
        try {
            const result = await Transaction.create({
                ...req.body,
            });

            res.send({ message: 'Hiring Success', data: result });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },

    updateTransaction: async (req, res) => {
        const { id } = req.params;
        try {
            const results = await Transaction.findByIdAndUpdate(id, {
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

    deleteTransaction: async (req, res) => {
        const { id } = req.params;

        try {
            const results = await Transaction.deleteOne({
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

    filterByName: async (req, res) => {
        const trans = req.query.trans;
        try {
            const result = await Transaction.find({
                name: {
                    $regex: trans,
                    $options: 'i',
                },
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
};
