var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/streams.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');

// myReadStream.pipe(myWriteStream);


var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact-us') {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/node') {
        var nodeObj = [{no: 11, name: 'Sudha'}, {no:12, name: 'Kiruba'}];
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(nodeObj));
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    } 
});

server.listen(4000, '127.0.0.1'); // localhost ip
console.log('Listening to port 4000...');
