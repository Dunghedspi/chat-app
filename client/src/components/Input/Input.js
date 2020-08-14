import React, { useState } from 'react';
import './Input.css';
const Input = (props) => {
    const { sendMessage } = props;
    const [message, setMessage] = useState("");
    return (
        <form className='form' onSubmit={(event) => event.preventDefault()}>
            <div className='input-text-box'>
                <input
                    className='input'
                    type='text'
                    placeholder='Type a message ...'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(message) : null)}
                />
            </div>
            <div className='btn-send'>
                <button className='sendButton' onClick={() => {sendMessage(message); setMessage("");}}>
                    Send
                </button>
            </div>
        </form>
    );
};

export default Input;
