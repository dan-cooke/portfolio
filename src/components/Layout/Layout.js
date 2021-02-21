import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from '../SEO/SEO'
import './Layout.scss'

export default function Layout({ children }) {
	return (
		<React.Fragment>
			<Helmet>
				<title>dan.</title>
			</Helmet>
			<SEO />
			<div className='portfolio__container'>{children}</div>
		</React.Fragment>
	)
}
