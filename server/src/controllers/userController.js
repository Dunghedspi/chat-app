const User = require('../models/user')();
const Message = require('../models/message')();
const bcryptUtil = require('../utils/bcrypt')();
const jwtCustom = require('../utils/auth');
module.exports = () => {
    return {
        signIn: async (req, res) => {
            const { userName, password } = req.body;
            try {
                const result = await User.signIn(userName);
                if (result) {
                    const matchPass = await bcryptUtil.checkPass(password, result.password);
                    if (matchPass) {
                        //tao token dang nhap
                        const token = await jwtCustom.createTokenAuth({
                            id: result.id,
                            role: result.role,
                        });
                        res.status(200).json(token);
                    } else {
                        res.sendStatus(404);
                    }
                } else {
                    res.sendStatus(404);
                }
            } catch (error) {
                console.error(error + '');
                res.sendStatus(403);
            }
        },
        signUp: async (req, res) => {
            try {
                const payload = req.body;
                payload.password = await bcryptUtil.hashPass(payload.password);
                const result = User.signUp(payload).then((data) => {
                    const [user, created] = data;
                    if (!created) {
                        res.sendStatus(404).send('Account exited');
                    } else {
                        res.sendStatus(201);
                    }
                });
            } catch (error) {
                console.error(error + '');
                res.sendStatus(404);
            }
        },
        getInfor: async (req, res) => {
            const { id } = req.payload.data;
            const result = User.getInfor(id)
                .then((data) => {
                    if (data) {
                        res.status(200).json(data);
                    } else {
                        res.status(404).send('Error');
                    }
                })
                .catch((error) => {
                    console.error(error);
                    res.status(404).send('Error');
                });
        },
        getRoomForUser: async (req, res) => {
            const { id } = req.payload.data;
            try {
                const result = await User.getRoomsForUser(id);
                if (result) {
                    res.status(200).json(result);
                }
            } catch (error) {
                res.sendStatus(404);
                console.log(error + '');
            }
        },
        getAllUser: async (req, res) => {
            const { id } = req.payload.data;
            try {
                const users = await User.getAllUser();
                if (users) {
                    const index = users.findIndex((user) => user.id === id);
                    users.splice(index, 1);
                }
                res.status(200).json(users);
            } catch (error) {
                res.sendStatus(404);
            }
        },
    };
};
