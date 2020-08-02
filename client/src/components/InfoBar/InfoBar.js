import React from 'react';
import './InfoBar.css';
const InfoBar = (props) => {
    const { room } = props;
    return (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' src='./onlineIcon.png' alt='icon online' />
                <h3>{room}</h3>
            </div>
            {/* <div className='rightInnerContainer'>
                <a href='/'>
                    <img className='closeIcon' src='./closeIcon.png' alt='close image' />
                </a>
            </div> */}
        </div>
    );
};
export default InfoBar;
