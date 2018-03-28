var express = require('express');
var http = require('http');

var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

/* GET home page. */
app.get('*', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 8080);
