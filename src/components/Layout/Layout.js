import React from 'react'
import { Helmet } from 'react-helmet'
import Chat from '../Chat/Chat'
import Navbar from '../Navbar/Navbar'
import SEO from '../SEO/SEO'
import './Layout.scss'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import '@fontsource/staatliches'

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
			<footer>
				<h1>
					Note: this site is being actively developed. Everything you see is
					subject to change. (Don't judge the FOUC yet 😭😭😭)
				</h1>
				<h2>
					Watch me build the rest of this site on{' '}
					<a href='https://www.twitch.tv/mtddan'>Twitch</a>
				</h2>
			</footer>
		</React.Fragment>
	)
}
export default Layout
