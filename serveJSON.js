var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        sNo: 01,
        name: 'Sudha',
        team: 'Assist',
        place: 'Chennai'
    };
    res.end(JSON.stringify(myObj));
});

server.listen(4000, '127.0.0.1'); // localhost ip
console.log('Listening to port 4000...');
