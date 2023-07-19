/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['flowbite.s3.amazonaws.com', 'scontent-lax3-1.cdninstagram.com']
	}
};

module.exports = nextConfig;
