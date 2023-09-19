var http = require('http');
var url = require('url');
var fs = require('fs');

var messages = [&quot; testing&quot;]; // WTF is dat?
var clients = [];

http.createServer(function (req, res) {
    res.end('Hello world');
}).listen(15213, 'localhost');
console.log('Server running.');