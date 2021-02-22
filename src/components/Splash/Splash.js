import React from 'react'
import Avatar from '../Avatar/Avatar'
import './Splash.scss'
import SplashBackground from './SplashBackground'

const Splash = () => {
	const getDate = () => {
		let date = new Date()
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
	}
	return (
		<SplashBackground className='splash'>
			<Avatar className='splash__avatar' />
			<span className='splash__bio'>
				<h1>Daniel Cooke.</h1>
				<h1>Frontend Developer.</h1>
				<h1>
					Looking for work
					<span className='last_updated'>as of {getDate()}</span>
				</h1>
			</span>
		</SplashBackground>
	)
}

export default Splash
