const fs = require('fs')
const path = require('path')
const config = require('./config')

module.exports = function (app) {
    Object.keys(config).forEach(key => {
        app.use(key, function (req, res) {
            const filename = path.join(__dirname, config[key].local);
            if (filename.match(/\.json$/)) {
                // json 文件直接读取内容返回
                res.json(JSON.parse(fs.readFileSync(filename)))
            } else {
                // js 文件被当作中间件引入
                // 引入前删除掉该文件的缓存，如果文件内容修改，不用重启 devServer
                delete require.cache[filename]
                require(filename)(req, res)
            }
        })
    })
}
