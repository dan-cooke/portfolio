module.exports = {
	siteMetadata: {
		title: "Dan Cooke's Portfolio",
		description: 'A frontend developer who likes to tinker',
	},
	plugins: [
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /svg/, // See below to configure properly
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Dan Cooke's Portfolio`,
				short_name: `dancooke.codes`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: `src/images/pixelbeanie.png`,
			},
		},
	],
}
