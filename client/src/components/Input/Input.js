import React from 'react';
import './Input.css';
const Input = (props) => {
    const { message, setMessage, sendMessage } = props;
    return (
        <form className='form' onSubmit={(event) => event.preventDefault()}>
            <input
                className='input'
                type='text'
                placeholder='Type a message ...'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
            />
            <button className='sendButton' onClick={(event) => sendMessage(event)}>
                Send
            </button>
        </form>
    );
};

export default Input;
