import React, { useState } from 'react'

const ChatInput = ({ onSendMessage }) => {
	const [currentMessage, setCurrentMessage] = useState('')
	const onMessageChange = (event) => {
		setCurrentMessage(event.target.value)
	}

	return (
		<form
			className='chat__input'
			onSubmit={(event) => {
				event.preventDefault()
				setCurrentMessage('')
				onSendMessage(currentMessage)
			}}
		>
			<input
				type='textarea'
				onChange={onMessageChange}
				value={currentMessage}
			/>
			<button type='submit'>Send</button>
		</form>
	)
}

export default ChatInput
