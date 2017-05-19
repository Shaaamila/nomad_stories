
var express = require('express');
var app = express();
var bodyParser	= require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));


// for heroku
app.listen(process.env.PORT || 8000);

// app.listen(8000, function() {
// 	console.log('Server is listening on port 8000');
// });
