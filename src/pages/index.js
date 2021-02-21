import * as React from 'react'
import Layout from '../components/Layout/Layout'
import LayoutProvider from '../context/LayoutContext/LayoutProvider'

const IndexPage = () => {
	return (
		<LayoutProvider>
			<Layout>Hello</Layout>
		</LayoutProvider>
	)
}

export default IndexPage
