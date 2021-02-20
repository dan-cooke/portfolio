import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
	query {
		file(relativePath: { eq: "yellowhat_transparent.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
const Avatar = ({ className }) => {
	const data = useStaticQuery(query)
	return <Img fluid={data.file.childImageSharp.fluid} className={className} />
}

export default Avatar
