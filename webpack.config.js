const path = require('path');

module.exports = {
    entry: "./app/main.js",  
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "all.js"
    },
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/ ,
				use: {
					loader: 'babel-loader',
					options: {
				  		presets: ['es2015','react']
					}
				}
			},
			{
            	test: /\.less$/,
	            use: [
		            {
		                loader: "style-loader" // creates style nodes from JS strings
		            }, 
		            {
		                loader: "css-loader" // translates CSS into CommonJS
		            }, 
		            {
		                loader: "less-loader" // compiles Less to CSS
		            }
	            ]
        	}
		]
	},
	watch : true
}