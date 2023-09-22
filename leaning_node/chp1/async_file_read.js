const http = require('http')
const fs = require('fs')
const port = 15213

http.createServer( (req, res) => {
    fs.readFile('hello.js', 'utf8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        if (err)
            res.write("Couldn't find or open file for reading")
        else
            res.write(data)
        res.end()
    })
}).listen(port, () => {console.log("Bound to %i", port)})