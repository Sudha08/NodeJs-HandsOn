var express = require('express');

var app = express(); // to access all the different methods available in express

app.set('view engine', 'ejs'); // assign the template engine to Express
app.use('/assets', express.static('assets'));

// app.get('/', function(req, res) { 
//     res.send('this is the homepage');
// });

app.get('/help', function(req, res) { // need not send the content type
    res.send('this is the help page');
});

// app.get('/', function(req, res) { // to send a html page to the client
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/contact', function(req, res) {
//     res.sendFile(__dirname + '/contact.html');
// });

app.get('/search/:id', function(req, res) { // eg:- Express route params
    res.send('You requested to search the Id ' + req.params.id);
});

// using template engines - basic
// app.get('/profile/:name', function(req, res) {
//     // method will be mostly used to deal with dynamic data (like data from DB)
//     var data = {age: 20, job: 'techie'};
//     res.render('profile', {person: req.params.name, data: data}); 
// });

// using template engines - more data
app.get('/profile/:name', function(req, res) {
    // method will be mostly used to deal with dynamic data (like data from DB)
    var data = {age: 20, job: 'techie', hobbies: ['eating', 'fighting', 'coding']};
    res.render('profile', {person: req.params.name, data: data}); 
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});


app.listen(4000);

