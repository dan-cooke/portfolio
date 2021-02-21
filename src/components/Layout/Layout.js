import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import Chat from '../Chat/Chat'
import Navbar from '../Navbar/Navbar'
import SEO from '../SEO/SEO'
import './Layout.scss'
import { motion } from 'framer-motion'
import LayoutContext from '../../context/LayoutContext/LayoutContext'

export default function Layout({ children }) {
	const { isChatExpanded } = useContext(LayoutContext)
	return (
		<React.Fragment>
			<Helmet>
				<title>dan.</title>
			</Helmet>
			<SEO />
			<div className={`site__layout ${isChatExpanded ? 'chat-expanded' : ''}`}>
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
				</div>
				{children}
			</div>
		</React.Fragment>
	)
}
