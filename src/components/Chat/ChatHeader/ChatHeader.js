import React, { useContext } from 'react'
import { FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa'
import LayoutContext from '../../../context/LayoutContext/LayoutContext'
import './ChatHeader.scss'

const ChatHeader = () => {
	const { isChatExpanded, setIsChatExpanded } = useContext(LayoutContext)
	return (
		<div className='chat__header'>
			<span className='status__icon'></span>
			<b>Daniel Cooke</b> - Looking for work!
			<button onClick={() => setIsChatExpanded(false)} id='min'>
				<FaWindowMinimize />
			</button>
			{!isChatExpanded && (
				<button id='max' onClick={() => setIsChatExpanded(true)}>
					<FaWindowMaximize />
				</button>
			)}
		</div>
	)
}

export default ChatHeader
