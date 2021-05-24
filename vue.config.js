

module.exports = {
    publicPath: '/b1ank3.github.io/',
    configureWebpack: config => {
        config['devtool'] = 'inline-source-map'
    },
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .loader('ts-loader')
            .tap(options => {
                return options
            })
    },
    // pages: {
    // 	'index': {
    // 		entry: './src/index/main.ts',
    // 		template: './public/index.html',
    // 		title: 'CSGO Cardinal',
    // 		chunks: ['chunk-vendors', 'chunk-common', 'index']
    // 	},
    // 	'popup': {
    // 		entry: './src/popup/main.ts',
    // 		template: './public/index.html',
    // 		title: 'Popup',
    // 		chunks: ['chunk-vendors', 'chunk-common', 'popup']
    // 	}
    // },
    pluginOptions: {
        // browserExtension: {
        // 	componentOptions: {
        // 		background: {
        // 			entry: './src/background/main.ts'
        // 		}
        // 	}
        // }
    }
}
