module.exports = {
    publicPath: '/negodi/',
    outputDir: 'docs',
    devServer: {
        port: 8081,
        host: "localhost"
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'でがネゴぢ',
        }
    }
};