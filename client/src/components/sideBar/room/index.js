import React from 'react';
const Room = (props) => {
    const { room, handerChange } = props;
    const handerClick = (id) => {
        if (handerChange) {
            handerChange(id);
        }
    };
    return (
        <div className='room' onClick={() => handerClick(room.rooms[0].id)}>
            <img className='image-box' src={room.avatar || './conan.jpg'} alt='avatar' />
            <div className='lastmessage'>
                <h4>{room.userName}</h4>
            </div>
        </div>
    );
};
export default Room;
