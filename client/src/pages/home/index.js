import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import io from 'socket.io-client';
import { getMessages } from '../../callApi/Message';
import { getAllUser } from '../../callApi/User';
import Input from '../../components/Input/Input';
import Messages from '../../components/Messages';
import RoomInfor from '../../components/roomInfor';
import SideBar from '../../components/sideBar';
import { tosatifyError } from '../../utils/tosatify';
import './styles.css';
let socket;
// import { tosatifyError, tosatifySuccess, tosatifyWarring } from '../../utils/tosatify';
const HomePage = (props) => {
    const [room, setRoom] = useState({});
    const [messages, setMessages] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [userName] = useState(() => localStorage.getItem('userName') || '');
    // const history = useHistory();

    const ENDPOINT = 'http://localhost:8000';

    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await getAllUser();
                if (result.status === 200) {
                    setRooms(result.data);
                    console.log(result);
                    setRoom(result.data[0]);
                    const messages = await getMessages(result.data[0].rooms[0].id);
                    console.log(messages);
                    if (messages) setMessages(messages.data);
                }
            } catch (error) {
                tosatifyError(error + '');
            }
        };
        getUser();
    }, []);

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("createSoketId", localStorage.getItem('userName'));
        
        socket.emit('join', room.userName);

        
    },[]);

    useEffect(()=>{
        socket.on('receiveMessage', message =>{
            console.log(message);
        })
    },[])

    const changeRoom = async (id) => {
        if (id !== room.rooms[0].id) {
            const index = rooms.findIndex((element) => element.rooms[0].id === id);
            setRoom(rooms[index]);
            window.history.replaceState(null, '', `/home/${id}`);
            const messages = await getMessages(id);
            if (messages) setMessages(messages.data);
        }
    };

    const submitMessage = (message)=>{
        socket.emit("sendMessage", message);
    }
    return !userName ? (
        <Redirect to='/login' />
    ) : (
        <div className='HomeContainer'>
            <div className='sideBarContainer'>
                <SideBar rooms={rooms} changeRoom={changeRoom} />
            </div>
            <div className='chatContainer'>
                <div className='Room'>
                    <RoomInfor room={room} />
                </div>
                <div className='Message'>
                    <Messages messages={messages} name={userName} />
                </div>
                <div className='Input'>
                    <Input sendMessage={submitMessage} />
                </div>
            </div>
        </div>
    );
};
export default HomePage;
