const { Contact } = require('../../models');

module.exports = {
    addMessage: async (req, res) => {
        try {
            const result = await Contact.create({
                ...req.body,
            });

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    getMessage: async (req, res) => {
        try {
            const result = await Contact.find();

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    deleteMessage: async (req, res) => {
        const id = req.params.id;
        try {
            await Contact.findByIdAndDelete(id);

            res.send('deleted');
        } catch (error) {
            res.send(error);
        }
    },
};
