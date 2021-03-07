module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/demo/' //ここは各自のプロジェクト名を入力します。
        : '/',
    outputDir: 'docs',
}