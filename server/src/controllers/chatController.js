const Message = require('../models/message')();
const jwtCustom = require('../utils/auth');
module.exports = () => {
    return {
        getMessage: async (req, res) => {
            try {
                const { id } = req.payload.data;
                const { roomId } = req.params;
                const result = await Message.getMessage({ userId: id, roomId });
                res.status(200).json(result);
            } catch (error) {
                console.error(error);
                res.sendStatus(404);
            }
        },
    };
};
