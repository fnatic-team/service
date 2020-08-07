const { Admin, User } = require('../../models');

const { hashPassword } = require('../../helpers');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../helpers/token');

module.exports = {
    addAdmin: async (req, res) => {
        const { fullname, username, password, role, image_url } = req.body;
        const roles = req.params.roles;
        try {
            if (roles === 'SUPERADMIN') {
                console.log(roles);
                const checkedAdmin = await Admin.findOne({ username });

                if (checkedAdmin) {
                    return res.send({
                        message: `Username is already registered`,
                    });
                }

                const hashedPassword = await hashPassword(password);

                await Admin.create({
                    fullname,
                    username,
                    password: hashedPassword,
                    role,
                    image_url,
                });

                res.send({
                    message: `Add admin success`,
                });
            } else {
                res.send(`you are not super admin`);
            }
        } catch (error) {
            console.error(error);
        }
    },
    getAllAdmin: async (req, res) => {
        try {
            const result = await Admin.find().select('-password');
            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    adminLogin: async (req, res) => {
        const { username, password } = req.body;

        const addAdmin = await Admin.findOne({
            username,
        });

        if (addAdmin) {
            bcrypt.compare(password, addAdmin.password).then((result) => {
                if (result === true) {
                    const adminData = {
                        id: addAdmin._id,
                        username: addAdmin.username,
                        fullname: addAdmin.fullname,
                        role: addAdmin.role,
                    };

                    const token = createToken(adminData);
                    res.send({
                        message: `Login Succesfull`,
                        token,
                        adminData,
                    });
                } else {
                    return res.send(`username or password is wrong`);
                }
            });
        } else {
            res.send(`username is not registered`);
        }
    },
    updateAdmin: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Admin.findByIdAndUpdate(
                { _id: id },
                {
                    ...req.body,
                }
            );

            res.send({ message: 'Update profil admin succes', data: result });
        } catch (error) {
            res.send(error);
        }
    },
    deleteAdmin: async (req, res) => {
        const id = req.params.id;
        try {
            await Admin.findByIdAndDelete(id);

            res.send({ message: 'deleted succes' });
        } catch (error) {
            res.send(error);
        }
    },
    getAllSpeakerActive:async (req, res) => {
        try {
            const result = await User.find({
            });

            const speakerActive = await User.countDocuments({
                role: "SPEAKER",
                status: "ACTIVE",
            });
            res.send({
                message: "Get All datas Summary",
                data: [
                    {
                        role: "SPEAKER",
                        status: "ACTIVE",
                        count: speakerActive,
                    }]
                });
        } catch (error) {
            res.send(error);
        }
    },

    getAllSpeakerUnverified:async (req, res) => {
        try {
            const result = await User.find({
            });

            const speakerPending = await User.countDocuments({
                role: "SPEAKER",
                status: "PENDING",
            });
            res.send({
                message: "Get All datas Summary",
                data: [
                    {
                        role: "SPEAKER",
                        status: "PENDING",
                        count: speakerPending,
                    }]
                });
        } catch (error) {
            res.send(error);
        }
    },
    
    getAllSpeakerInactive: async (req, res) => {
        try {
            const result = await User.find({
            });

            const speakerInactive = await User.countDocuments({
                role: "SPEAKER",
                status: "INACTIVE",
            });
            res.send({
                message: "Get All datas Summary",
                data: [
                    {
                        role: "SPEAKER",
                        status: "INACTIVE",
                        count: speakerInactive,
                    }]
                });
        } catch (error) {
            res.send(error);
        }
    },
    
    getAllAudienceActive: async (req, res) => {
        try {
            const result = await User.find({
            });

            const audienceActive = await User.countDocuments({
                role: "AUDIENCE",
                status: "ACTIVE",
            });
            res.send({
                message: "Get All datas Summary",
                data: [
                    {
                        role: "AUDIENCE",
                        status: "ACTIVE",
                        count: audienceActive,
                    }]
                });
        } catch (error) {
            res.send(error);
        }
    },
    
    
    getAllAudienceInactive: async (req, res) => {
        try {
            const result = await User.find({
            });

            const audienceInactive = await User.countDocuments({
                role: "AUDIENCE",
                status: "INACTIVE",
            });
            res.send({
                message: "Get All datas Summary",
                data: [
                    {
                        role: "AUDIENCE",
                        status: "INACTIVE",
                        count: audienceInactive,
                    }]
                });
        } catch (error) {
            res.send(error);
        }
    },
};
