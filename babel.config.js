
module.exports = (api) => {
    api.cache(true)
    return {
        presets: [
            ['@babel/preset-env'],
            ['@babel/preset-react']
        ],
        // 注意，下面这个插件在开发环境的时候引入，在buuld的时候需要注释掉
        plugins: [
            ['react-refresh/babel'],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    }
}
