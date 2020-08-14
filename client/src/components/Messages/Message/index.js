import React from 'react';
import ReactEmoji from 'react-emoji';
import './styles.css';

const Message = (props) => {
    let isSentByCurrentUser = false;
    const { message, name } = props;
    const { text, user } = message;
    const trimmedName = name.trim().toLowerCase();
    console.log(user, name);
    if (user.userName === trimmedName) {
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
            <p className='sentText pl-10 '>{user.userName}</p>
        </div>
    );
};

export default Message;
