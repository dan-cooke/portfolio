import React from 'react'
import { Helmet } from 'react-helmet'
import Chat from '../Chat/Chat'
import Navbar from '../Navbar/Navbar'
import SEO from '../SEO/SEO'
import './Layout.scss'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Layout = ({ children, chatDisabled }) => {
	const isChatExpanded = useSelector((state) => state.chat.isChatExpanded)

	return (
		<React.Fragment>
			<Helmet>
				<title>dan.</title>
			</Helmet>
			<SEO />
			<div
				className={`site__layout ${
					isChatExpanded && !chatDisabled ? 'chat-expanded' : ''
				}`}
			>
				<motion.div
					className='site__layout--chat'
					layout
					transition={{
						type: 'spring',
						stiffness: 700,
						damping: 30,
					}}
				>
					<Chat />
				</motion.div>
				<div className='site__layout--main__content'>
					<Navbar />
					{children}
				</div>
			</div>
		</React.Fragment>
	)
}
export default Layout
