const http = require('http');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const Models = require('./database/models');
const api = require('./src/api');
const socket = require('socket.io');
const cookieParser = require('cookie-parser');
const path = require('path');
const socketIO = require('./src/utils/socket');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

api(app);
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

const io = socket(server);
socketIO(io);

server.listen(PORT, () => console.log(`Server has started.${PORT}`));
