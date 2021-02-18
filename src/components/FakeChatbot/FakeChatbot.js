import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import './FakeChatbot.scss';

const FakeChatbot = () => {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            body: 'Hi! I\'m Dan Cooke',
        },
        {
            body: <span>A frontend developer who specializes in React, Next.js and GraphQL</span>
        },
        {
            body: '👷 This website is currently under construction.👷'
        },
        {
            body: <span>But in the meantime you can checkout my <a href="https://github.com/dan-cooke">Github</a> and <a href="https://stackoverflow.com/users/5645292/daniel-cooke" className="href">StackOverflow</a>.</span>
        }

    ]);

    const sendMessageFromMe = (body) => {
        setTyping(true);
        setTimeout(() => {
            setTyping(false);
            setMessages((prevMessages) => ([...prevMessages, { body }]))
        }, 500)
    }

    // const queueWithDelay = (queue, delay) => {
    //     queue.forEach(item => )
    // }
    // useEffect(() => {
    //     sendMessageFromMe('Test')
    //     sendMessageFromMe('Test')
    //     sendMessageFromMe('Test')
    //     sendMessageFromMe('Test')
    //     sendMessageFromMe('Test')
    //     sendMessageFromMe('Test')

    // }, [])
    return (
        <div className="chat">
            {messages.map(message => <Message user={message.user}>{message.body}</Message>)}
            {typing ? <Message typing>...</Message>: null}
        </div>
    )
}

export default FakeChatbot;