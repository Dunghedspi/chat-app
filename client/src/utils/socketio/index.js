import queryString from 'query-string';
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:8000/';

const connect = () =>{
    const socket = io(ENDPOINT);

    socket.emit("join", ()
}