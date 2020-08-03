const { Newsletter } = require('../../models');

module.exports= {
    addNewsletter: async (req, res) => {
        try {
            const result = await Newsletter.create({
                ...req.body,
            });

            res.send({ message: 'Add Newsletter succes', data: result });
        } catch (error) {
            res.send(error);
        }
    },
    getAllNewsletter: async (req, res) => {
        try {
            const result = await Newsletter.find();

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },

};