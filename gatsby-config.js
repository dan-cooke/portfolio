module.exports = {
	siteMetadata: {
		title: 'dancooke',
		titleTemplate: '%s | Portfolio',
		description: 'A frontend developer who likes to tinker',
		url: 'https://dancooke.codes',
		image: 'src/images/pixelbeanie_large.png',
	},
	plugins: [
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-transformer-sharp',
		'gatsby-background-image',
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
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Staatliches'],
				},
			},
		},
	],
}
