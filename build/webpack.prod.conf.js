var path=require('path');
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin=require('html-webpack-plugin');

var baseWebpackConfig=require('./webpack.base.conf')

var webpackConfig=merge(baseWebpackConfig,{
plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // extract css into its own file
        //new ExtractTextPlugin(utils.assetsPath('css/[name].css')),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeAttributeQuotes: true
            //         // more options:
            //         // https://github.com/kangax/html-minifier#options-quick-reference
            // },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})

module.exports=webpackConfig
