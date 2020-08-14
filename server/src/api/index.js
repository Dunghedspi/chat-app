const user = require('./user');
const chat = require('./chat');
module.exports = (server) => {
    server.use('/api/v1/user', user);
    server.use('/api/v1/', chat);
};
