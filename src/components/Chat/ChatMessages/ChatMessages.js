import React, { useEffect, useRef } from 'react'
import Message from '../../Message/Message'
import './ChatMessages.scss'

const ChatMessages = ({ messages, typing }) => {
	const messageContainer = useRef()

	// Keep scrolling to latest message
	useEffect(() => {
		messageContainer.current.scrollTop = messageContainer.current.scrollHeight
	}, [messages])

	return (
		<div className='chat__messages' ref={messageContainer}>
			{messages.map((message) => (
				<Message key={message.body} user={message.user} me={message.me}>
					{message.body}
				</Message>
			))}
			{typing ? (
				<Message typing me>
					...
				</Message>
			) : null}
		</div>
	)
}

export default ChatMessages
