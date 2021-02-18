import React from 'react';
import './Message.scss';

const Message = ({ children, user, typing }) => {
    return (
        <div className="message">
            <div className={`message__body ${typing ? 'typing' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Message;