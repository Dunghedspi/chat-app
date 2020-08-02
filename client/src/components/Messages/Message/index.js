import React, { useState } from 'react';

import './styles.css';

import ReactEmoji from 'react-emoji';

const Message = (props) => {
    //const [isSentByCurrentUser, setIsSentByCurrentUser] = useState(() => false);
    let isSentByCurrentUser = false;
    const { message, name } = props;
    const { text, user } = message;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        //setIsSentByCurrentUser(true);
        isSentByCurrentUser = true;
    }

    return isSentByCurrentUser ? (
        <div className='messageContainer justifyEnd'>
            <p className='sentText pr-10'>{trimmedName}</p>
            <div className='messageBox backgroundBlue'>
                <p className='messageText colorWhite'>{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    ) : (
        <div className='messageContainer justifyStart'>
            <div className='messageBox backgroundLight'>
                <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
            </div>
            <p className='sentText pl-10 '>{user}</p>
        </div>
    );
};

export default Message;
