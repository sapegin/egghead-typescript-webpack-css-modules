const path = require('path');
module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.join(__dirname, 'src'),
				use: [
					'style-loader',
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							modules: true,
							namedExport: true,
						},
					},
				],
			},
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
};
