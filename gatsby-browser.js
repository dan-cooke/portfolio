import React from 'react'
import Layout from './src/components/Layout/Layout'
import { Provider } from 'react-redux'
import store from './src/store/store'

/* eslint-disable react/display-name */
export const wrapPageElement = ({ element, props }) => {
	// Disable the chat on the homepag
	const onHomePage = element.props.path === '/'

	return (
		<Layout chatDisabled={onHomePage} {...props}>
			{element}
		</Layout>
	)
}

export const wrapRootElement = ({ element }) => {
	return <Provider store={store}>{element}</Provider>
}

export const onClientEntry = () => {
	// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
	if (!(`IntersectionObserver` in window)) {
		import(`intersection-observer`)
		console.log(`# IntersectionObserver is polyfilled!`)
	}
}
