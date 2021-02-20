import React from 'react'
import { Helmet } from 'react-helmet'
import './Layout.scss'

export default function Layout({ children }) {
	return (
		<React.Fragment>
			<Helmet>
				<title>dan.</title>
			</Helmet>
			<div className='portfolio__container'>{children}</div>
		</React.Fragment>
	)
}
