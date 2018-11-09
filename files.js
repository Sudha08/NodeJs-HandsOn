var fs = require('fs');

// Read a file
// 2 params - fileName, character encoding foramt - in order to convert the binary code to readable text
var readME = fs.readFileSync('readMe.txt', 'utf8'); // blocking code/ synchronous method

console.log(readME);

// write a file

fs.writeFileSync('wrtieMe.txt', readME); // blocking code/ synchronous method


//Async versions / Non-blocking code

// Read a file
fs.readFile('readMeAsync.txt', 'utf8', function(err, data) {
    console.log(data);
});

// write a file
fs.readFile('readMeAsync.txt', 'utf8', function(err, data) {
    fs.writeFile('writeMeAsync1.txt', data);
});

// delete the file
fs.unlink('writeMeAsync1.txt');

console.log('test');

