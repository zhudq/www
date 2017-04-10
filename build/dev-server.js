var path=require('path')
var express=require('express')
var webpack=require('webpack')
var webpackConfig=require('./webpack.dev.conf')
var opn = require('opn')
var config = require('../config')

var port = process.env.PORT || config.dev.port
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)

var server=express()
var compiler=webpack(webpackConfig)

var devMiddleware=require('webpack-dev-middleware') (compiler,{
	publicPath:webpackConfig.output.publicPath,
	stats:{
		colors:true,
		chunks:false
	}
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// serve webpack bundle output
server.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)

// serve pure static assets
var staticPath = path.resolve(__dirname,'./static');//path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})


