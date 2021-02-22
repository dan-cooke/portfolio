import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const SplashBackground = ({ className, children }) => {
	const data = useStaticQuery(
		graphql`
			query {
				file(relativePath: { eq: "avatar_bg2.png" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`
	)

	// Set ImageData.
	const imageData = data.file.childImageSharp.fluid

	return (
		<BackgroundImage
			Tag='section'
			className={className}
			fluid={imageData}
			backgroundColor={`#040e18`}
		>
			{children}
		</BackgroundImage>
	)
}

export default SplashBackground
