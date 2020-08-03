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
    deleteNewsletter: async (req, res) =>{
        const { id } = req.params;
        try {
            await Newsletter.deleteOne({
                _id:id,
            });

            res.send({ message: 'deleted succes' });
        } catch (error) {
            res.send(error);
        }
    }

};