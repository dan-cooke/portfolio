import React from 'react'
import './Message.scss'

const Message = ({ children, typing, me }) => {
	return (
		<div className={`message ${typing ? 'typing' : ''} ${me ? 'me' : ''}`}>
			{children}
		</div>
	)
}

export default Message
