var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey dudes');
});

server.listen(4000, '127.0.0.1'); // localhost ip
console.log('Listening to port 4000...');