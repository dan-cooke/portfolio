import React from 'react'
import { FaWindowMinimize } from 'react-icons/fa'
import './ChatHeader.scss'

const ChatHeader = () => {
	return (
		<div className='chat__header'>
			<span className='status__icon'></span>
			<b>Daniel Cooke</b> - Looking for work!
			<button>
				<FaWindowMinimize />
			</button>
		</div>
	)
}

export default ChatHeader
