import React from 'react'
import Avatar from '../Avatar/Avatar'
import './Splash.scss'
import SplashBackground from './SplashBackground'

const Splash = () => {
	return (
		<SplashBackground className='splash'>
			<Avatar className='splash__avatar' />
			<span className='splash__bio'>
				<h1>Daniel Cooke.</h1>
				<h1>Frontend Developer.</h1>
				<h1>Employeed 😀 </h1>
			</span>
		</SplashBackground>
	)
}

export default Splash
