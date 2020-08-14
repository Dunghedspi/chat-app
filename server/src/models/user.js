'use strict';
const { Op, Model } = require('sequelize');
const Models = require('../../database/models');
module.exports = () => {
    return {
        signIn: async (username) => {
            const result = await Models.user
                .findOne({
                    attributes: ['id', 'password'],
                    where: {
                        userName: username,
                    },
                })
                .then((data) => data)
                .catch((error) => {
                    throw new Error(error);
                });
            return result;
        },
        signUp: async (payload) => {
            let { userName } = payload;
            payload.createdAt = payload.updatedAt = new Date();
            const result = Models.user
                .findOrCreate({
                    attributes: ['id'],
                    where: {
                        [Op.or]: {
                            userName: {
                                [Op.eq]: userName,
                            },
                        },
                    },
                    defaults: {
                        ...payload,
                    },
                })
                .then((data) => data)
                .catch((error) => {
                    return error;
                });
            return result;
        },
        getInfor: async (id) => {
            const result = await Models.user
                .findByPk(id, {
                    attributes: ['userName', 'avatar'],
                })
                .then((data) => data)
                .catch((error) => {
                    throw error;
                });
            return result;
        },
        getRoomsForUser: async (id) => {
            const result = await Models.user.findByPk(id, {
                include: [
                    {
                        model: Models.room,
                        required: true,
                        attributes: ['id', 'name'],
                    },
                ],
                attributes: ['id', 'userName', 'avatar'],
            });
            return result;
        },
        getAllUser: async () => {
            const result = await Models.user.findAll({
                attributes: ['id', 'userName', 'avatar'],
                include: [{ model: Models.room, required: true }],
            });
            return result;
        },
        updateSockerId: async (userName, socketId) => {
            console.log(userName);
            const result = await Models.user.findOne({
                where: {userName}
            });
            if(result) {result.socketId = socketId;
            await result.save();
            }
        },
        getSocketId: async (userName) => {
            const result = await Models.user.findOne({
                where: {userName},
                attributes: ['socketId'],
            });
            return result;
        },
    };
};
