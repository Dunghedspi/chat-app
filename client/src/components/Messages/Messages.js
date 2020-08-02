import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/index';
import './Messages.css';

const Messages = (props) => {
    const { messages, name } = props;
    return (
        <ScrollToBottom className='messages'>
            {messages.map((message, index) => {
                return (
                    <div key={index}>
                        <Message message={message} name={name} key={index} />
                    </div>
                );
            })}
        </ScrollToBottom>
    );
};
export default Messages;
