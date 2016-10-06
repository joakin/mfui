var path = require( 'path' );
var webpack = require( 'webpack' );

var PUBLIC_PATH = '/w/extensions/Cards';
var outputDir = 'build';

module.exports = {
	entry: {
		cards: './src/cards/index.js'
	},
	output: {
		// The absolute path to the output directory.
		path: path.resolve( __dirname, outputDir ),

		// Write each chunk (entries, here) to a file named after the entry, e.g.
		// the "index" entry gets written to index.js.
		filename: '[name].js',

		// The public path of the output files when they're loaded by the browser.
		publicPath: PUBLIC_PATH + '/' + outputDir,

		// The name of the output files when they're viewed in WebKit's or Gecko's
		// DevTools, for example.
		devtoolModuleFilenameTemplate: PUBLIC_PATH + '/[resource-path]'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			// See https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
			// for a list of options.
			//
			// By default the UglifyJsPlugin will compresses and mangles all chunks.
			compress: {
				warnings: false
			},
		})
	],
	module: {
		loaders: [{
			test: /\.hogan$/,

			// `mw.template#get`, however, returns an object with the following shape:
			//
			//     {
			//       render: function () { /* ... */ }
			//     }
			//
			// By default, the Mustache loader will return the JavaScript function
			// generated by the compiler. The `noShortcut` query makes the loader
			// return an object with the required shape.
			loader: 'mustache?noShortcut'
		}]
	},
	devtool: 'source-map'
};
