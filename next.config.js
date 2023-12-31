/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			}
		],
		domains: [
			'scontent-lax3-1.cdninstagram.com',
			'scontent-sjc3-1.cdninstagram.com'
		]
	},
	output: 'standalone'
};

module.exports = nextConfig;
