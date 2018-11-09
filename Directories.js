// creating & removing directories

var fs = require('fs');

// Sync versions

fs.mkdirSync('stuff');

fs.rmdirSync('stuff');

// Async version

fs.mkdir('stuff', function() {
    fs.readFile('readMe.txt', 'utf8', function(err, data) {
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});

fs.unlink('./stuff/writeMe.txt', function() { // empty the directory by deleting the file
    fs.rmdir('stuff');
});
