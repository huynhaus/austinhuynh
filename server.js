const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/wordle', function(req, res) {
	res.sendFile(path.join(__dirname, '/wordle/wordle.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);