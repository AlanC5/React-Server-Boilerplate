var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

const app = express();

app.use(favicon(path.join(__dirname, 'static/images', 'favicon.ico'))); 

app.use(express.static(path.join(__dirname, 'static/dist')));

app.listen(process.env.PORT || 8080);