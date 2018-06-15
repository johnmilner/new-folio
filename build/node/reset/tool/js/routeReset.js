const fs = require('fs')
const config = require('../../config/config.js')

module.exports = _ => {
    const route = config.js.route

    fs.unlinkSync(route)
    createJsRoute()

    function createJsRoute () {
        var stream = fs.createWriteStream(route)
        stream.once('open', _ => {
            stream.write('/*\r\n')
            stream.write('\r\n')
            stream.write('router.init(\'/\', HomeController)\r\n')
            stream.write('router.init(\'/about\', AboutController)\r\n')
            stream.write('router.init(\'/work/:id/:name\', WorkOneController).with(\'id\', \'[0-9]+\').with(\'name\', \'[a-z0-9-]+\')\r\n')
            stream.write('router.init(\'/work/:type\', WorkAllController).with(\'type\', \'date|title\')\r\n')
            stream.write('router.init(\'/work\', WorkAllController)\r\n')
            stream.write('\r\n')
            stream.write('*/\r\n')
            stream.write('\r\n')
            stream.write('import Router from \'../../Engine/Router.js\'\r\n')
            stream.write('import ErrorController from \'../Controller/ErrorController.js\'\r\n')
            stream.write('import HomeController from \'../Controller/HomeController.js\'\r\n')
            stream.write('import AboutController from \'../Controller/AboutController.js\'\r\n')
            stream.write('\r\n')
            stream.write('class Route {\r\n')
            stream.write('\r\n')
            stream.write('    constructor () {\r\n')
            stream.write('        const router = new Router()\r\n')
            stream.write('\r\n')
            stream.write('        router.init(\'/\', HomeController)\r\n')
            stream.write('        router.init(\'/about\', AboutController)\r\n')
            stream.write('\r\n')
            stream.write('        router.error(ErrorController)\r\n')
            stream.write('\r\n')
            stream.write('        router.run()\r\n')
            stream.write('    }\r\n')
            stream.write('\r\n')
            stream.write('}\r\n')
            stream.write('\r\n')
            stream.write('export default Route\r\n')
            stream.end()
        })
    }

}
