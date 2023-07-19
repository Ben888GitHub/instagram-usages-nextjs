/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'scontent-lax3-1.cdninstagram.com',
			'scontent-sjc3-1.cdninstagram.com'
		]
	},
	output: 'standalone'
};

module.exports = nextConfig;
