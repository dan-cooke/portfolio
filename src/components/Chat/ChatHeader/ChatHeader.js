import React from 'react'
import { FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa'
import './ChatHeader.scss'
import { useSelector, useDispatch } from 'react-redux'
import { hideChat, showChat } from '../chatSlice'

const ChatHeader = () => {
	const isChatExpanded = useSelector((state) => state.chat.isChatExpanded)
	const dispatch = useDispatch()
	return (
		<div className='chat__header'>
			<span className='status__icon'></span>
			<b>Daniel Cooke</b> - Looking for work!
			<button onClick={() => dispatch(hideChat())} id='min'>
				<FaWindowMinimize />
			</button>
			{!isChatExpanded && (
				<button id='max' onClick={() => dispatch(showChat())}>
					<FaWindowMaximize />
				</button>
			)}
		</div>
	)
}

export default ChatHeader
