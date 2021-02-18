import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
    query {
        file(relativePath: { eq: "me.png"} ) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid

                }
            }
        }
    }

`
const Avatar = () => {
    const data = useStaticQuery(query)
    return <Img style={{ width: '200px', height: '200px'}} fluid={data.file.childImageSharp.fluid}/>
}

export default Avatar;