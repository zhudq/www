// https://github.com/shelljs/shelljs
require('shelljs/global')

var path=require('path');
var webpack=require('webpack');
var webpackconfig=require('./webpack.prod.conf')
var ora=require('ora');

var spinner=ora('building for production')
spinner.start();

var assetsPath=path.resolve(__dirname,'../bin')
rm('-rf',assetsPath)
mkdir('-p',assetsPath)
//cp('-R', 'static/*', assetsPath)

webpack(webpackconfig,function (err,stats) {
	spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})
