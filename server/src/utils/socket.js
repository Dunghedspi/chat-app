const User = require('../models/user')();
const socketIO = (io) => {
    let socketIdToMessage = null;
    io.on('connect',async (socket) => {
        console.log(socket.id);
        socket.on("createSoketId", async (userName) => {
            const sendUser = await User.updateSockerId(userName, socket.id);
        });
        
        socket.on('join', async (userName) => {
            const result = await User.getSocketId(userName);
            if (result) {
                socketIdToMessage = result.socketId;
                console.log(socketIdToMessage);
            }
        });

        socket.on('sendMessage', (message) => {
            console.log(socket.id, socketIdToMessage, message );
            io.to(socketIdToMessage).emit('receiveMessage', message);
        });
        socket.on('disconnect', async (id) => {
            console.log("disconnect");
            const sendUser = await User.updateSockerId(id, null);
        });
    });
};
module.exports = socketIO;
