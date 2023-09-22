const http = require('http')
const fs = require('fs')
const port = 15213

function writeNumbers(res) {
    let counter = 0
    
    for (let i = 0; i < 100; i++) {
        counter++
        res.write(counter.toString() + '\n')
    }
}

http.createServer((req, res) => {
    const query = require('url').parse(req.url).query
    const app = require('querystring').parse(query).file + '.js'

    res.writeHead(200, {'Content-Type': 'text/plain'})

    writeNumbers(res)

    setTimeout( () => {
        console.log('openning ' + app)
        fs.readFile(app, 'utf8', (err, data) => {
            if (err)
                res.write('Could not find or open file for reading')
            else
                res.write(data)
            res.end()
        })
    }, 2000)
}).listen(port)