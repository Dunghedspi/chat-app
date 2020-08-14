import React, { useState } from 'react';
import Room from './room';
import './styles.css';
const SideBar = (props) => {
    const { rooms, changeRoom } = props;
    const [textSearch, setTextSearch] = useState('');
    const handerChange = (id) => {
        if (changeRoom) {
            changeRoom(id);
        }
    };
    const renderRoom = (rooms) => {
        if (rooms) {
            return rooms.map((room, index) => (
                <Room key={index} room={room} handerChange={handerChange} />
            ));
        }
    };
    return (
        <div className='sideBar-box'>
            <div className='userInfor'>
                <img className='image-box' src='./conan.jpg' alt='userimage' />
                <h1>Chat</h1>
            </div>
            <div className='sreach-box'>
                <label>
                    <i className='fa fa-search' aria-hidden='true'></i>
                </label>
                <input
                    type='text'
                    value={textSearch}
                    onChange={(event) => setTextSearch(event.target.value)}
                    placeholder='Sreach Room'
                />
            </div>
            <div className='roomList'>{renderRoom(rooms)}</div>
        </div>
    );
};
export default SideBar;
