var http = require('http');
var content = '&lt;html&gt;&lt;body&gt;&lt;p&gt;Hello World&lt;/p&gt;&lt;script type=”text/javascript”'
    +'>alert(“Hi!”);&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;';

http.createServer(function(req, resp) {
    resp.end(content);
}).listen(15213, 'localhost');

console.log('Server running at localhost:15213');