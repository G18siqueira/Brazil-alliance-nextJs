/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: false,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(mp4)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						publicPath: '/_next/static/videos',
						outputPath: 'static/videos',
					},
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
