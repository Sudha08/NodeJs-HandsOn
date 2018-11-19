var express = require('express');

var app = express(); // to access all the different methods available in express

app.get('/', function(req, res) { // need not send the content type
    res.send('this is the homepage');
});

app.get('/contact', function(req, res) { // need not send the content type
    res.send('this is the contact page');
});


app.listen(4000);

