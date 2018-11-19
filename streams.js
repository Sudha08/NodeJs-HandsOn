// Readable streams

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/streams.txt');
var myReadStream = fs.createReadStream(__dirname + '/streams.txt', 'utf8');

myReadStream.on('data', function (chunk) {
    console.log('New chunk recieved:');
    console.log(chunk);
});

// Writable stream

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/streams.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');

myReadStream.on('data', function (chunk) {
    console.log('New chunk recieved:');
    myWriteStream.write(chunk);
});





