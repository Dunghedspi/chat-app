import React from 'react';
import './Input.css';
const Input = (props) => {
    const { message, setMessage, sendMessage } = props;
    return (
        <form className='form' onSubmit={(event) => event.preventDefault()}>
            <div className='input-text-box'>
                <input
                    className='input'
                    type='text'
                    placeholder='Type a message ...'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
                />
            </div>
            <div className='btn-send'>
                <button className='sendButton' onClick={(event) => sendMessage(event)}>
                    Send
                </button>
            </div>
        </form>
    );
};

export default Input;
