const User = require('../models/user')();
const socketIO = (io) => {
    let socketIdToMessage = null;
    io.on('connect', async (socket) => {
        console.log(socket.id);
        const sendUser = await User.updateSockerId(1, socket.id);
        socket.on('join', async (userName) => {
            console.log(userName);
            const result = await User.getSocketId(userName);
            if (result) {
                socketIdToMessage = result.socketId;
            }
        });
        socket.on('sendMessage', (message) => {
            io.to(socketIdToMessage, { message });
        });
        socket.on('disconnect', async (id) => {
            const sendUser = await User.updateSockerId(id, null);
        });
    });
};
module.exports = socketIO;
