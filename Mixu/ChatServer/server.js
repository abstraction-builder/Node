const http = require('http')
const url = require('url')
const fs = require('fs')
const { unescape } = require('querystring')

const messages = ["testing"] 
const clients = []

http.createServer((req, res) => {
    const url_parts = url.parse(req.url)
    console.log(url_parts)
    
    if (url_parts.pathname == '/')
    {
        fs.readFile('./index.html', (err, data) => {
            res.end(data)
        })
    } else if (url_parts.pathname.substr(0, 5) == '/poll')
    {
        // polling code 
        const count = url_parts.pathname.replace(/[^0-9]*/, '')
        console.log(count)
        
        if (messages.length > count)
        {
            res.end(JSON.stringify ({
                count: messages.length,
                append: messages.slice(count).join("\n") + "\n"
            }))
        }else {
            clients.push(res)
        }
    } else if (url_parts.pathname.substr(0, 5) == '/msg/') {
        // message receiving
        const msg = unescape(url_parts.pathname.substr(5))
        messages.push(msg)
        while (clients.length > 0) {
            const client = clients.pop()
            client.end(JSON.stringify( {
                count: messages.length,
                append: msg+ "\n"
            }))
        }
        res.end()
    }

}).listen(15213, 'localhost')

console.log('Server running.')
