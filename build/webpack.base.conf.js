var path=require('path');

var assetsRoot = path.resolve(__dirname,'./bin')
module.exports={
	entry: {
        main: './src/app.js'
    },
	output:{
		path:assetsRoot,
		filename:'[name].js',
		chunkFilename: "[name].[hash].chunk.js"
	}
}
