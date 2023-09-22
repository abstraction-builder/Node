const http = require('http')

http.createServer( (req, res) => {
	// content header
	res.writeHead(200, {'content-type': 'text/plain'})

	// write msg and signal communication is complete
	res.end('Hello, world!\n')
}).listen(15213)

console.log('Server is up and running on 15213 port')
