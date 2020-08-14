import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/index';
import './Messages.css';

const Messages = (props) => {
    const { messages, name } = props;
    const renderMessage = (messages) => {
        console.log(messages);
        if (messages) {
            return messages.map((message, index) => {
                return (
                    <div key={index}>
                        <Message message={message} name={name} key={index} />
                    </div>
                );
            });
        }
    };
    console.log(messages);
    return (
        <div className='chat-box'>
            <ScrollToBottom className='messages'>{renderMessage(messages)}</ScrollToBottom>
        </div>
    );
};
export default Messages;
