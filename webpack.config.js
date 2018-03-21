const path = require('path');

module.exports = {
  mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.vue', '.js', '.css'],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
    {
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /(node_modules)/,
      options: {
        configFile: 'tslint.json',
        fix: true,
      }
    },
    {
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          ts: 'ts-loader',
          sass: 'style-loader!css-loader!sass-loader'
        },
        preLoaders: {
          ts: 'tslint-loader?{"options":{"configFile":"tslint.json","tsConfigFile":"tsconfig.json","fix":true}}'
        },
      }
    }]
	},
	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /vee\$/, to: '/vee' }, { from: /element\$/, to: '/element' }]
		},
		// open: true,
		port: 3000,
		// openPage: 'element',
		host: "localhost",
	},
	devtool: 'inline-source-map'
};