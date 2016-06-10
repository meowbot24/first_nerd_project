var express = require('express');
var app = express();

app.set('views', '/Users/ceciliawong/Documents/Coding Files/first_nerd_project/');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
	res.render('meowbot.html');
});

app.listen(3000, function () {
	console.log('Starting Server');
});