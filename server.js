var express = require('express');
var app = express;

app.use(express.static('www'));

app.set('port', process.env.PORT || 500);