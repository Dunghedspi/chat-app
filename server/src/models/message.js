'use strict';
const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const Models = require('../../database/models');
function MessageModel(params) {
    return {
        // getLastMessage: async (roomId) => {
        //     try {
        //         const result = await Models.message.findAll({
        //             where: {
        //                 roomId,
        //             },
        //             attributes: ['text', 'createdAt'],
        //             order: [['createdAt', 'DESC']],
        //             limit: 1,
        //         });
        //         if (result) {
        //             return result;
        //         }
        //     } catch (error) {
        //         throw error;
        //     }
        // },
        getMessage: async (options) => {
            const { roomId } = options;
            try {
                const result = await Models.message.findAll({
                    where: { roomId },
                    include: [
                        {
                            model: Models.user,
                            required: true,
                            attributes: ['id', 'userName'],
                        },
                    ],
                    attributes: ['id', 'text', 'createdAt'],
                });
                return result;
            } catch (error) {
                throw error;
            }
        },
        insertMessage: async (payload) => {
            try {
                const result = await Models.meesage.create(payload);
                return result;
            } catch (error) {
                throw error;
            }
        },
        // updateMessage: async (payload) => {
        //     const { formData } = payload;
        //     try {
        //         const result = await Models.message.update(formData, {
        //             where: {
        //                 id: formData.id,
        //             },
        //         });
        //         return result;
        //     } catch (error) {
        //         throw error;
        //     }
        // },
        // deleteMessage: async (payload) => {
        //     const { userId, roomId } = payload;
        //     try {
        //         const result = await Models.message.destroy({ where: { userId, roomId } });
        //         return result;
        //     } catch (error) {
        //         throw error;
        //     }
        // },
    };
}
module.exports = MessageModel;
