var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');    
    
    myReadStream.pipe(res);
});

server.listen(4000, '127.0.0.1'); // localhost ip
console.log('Listening to port 4000...');
