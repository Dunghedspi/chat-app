import React from 'react';
import './styles.css';
const RoomInfor = (props) => {
    const { room } = props;
    return (
        <div className='room-box'>
            <div className='room-image'>
                <img src={room.avatar || './conan.jpg'} alt='userroom' className='image-box' />
                <div className='userName'>
                    <h4>{room.userName}</h4>
                </div>
            </div>
            <div className='function-room'>
                <div className='icon-phone icon'>
                    <i className='fa fa-phone' aria-hidden='true'></i>
                </div>
                <div className='icon-camera icon'>
                    <i className='fa fa-video-camera' aria-hidden='true'></i>
                </div>
            </div>
        </div>
    );
};
export default RoomInfor;
