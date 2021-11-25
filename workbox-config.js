module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,js,woff,svg}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'src/sw.js'
};