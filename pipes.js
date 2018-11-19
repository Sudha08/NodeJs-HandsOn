var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/streams.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');

// myReadStream.pipe(myWriteStream);


var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/streams.txt', 'utf8');    
    
    myReadStream.pipe(res);
});

server.listen(4000, '127.0.0.1'); // localhost ip
console.log('Listening to port 4000...');
