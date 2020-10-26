var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

const app = express();

app.use(favicon(path.join(__dirname, 'static/dist/images', 'favicon.ico'))); 

app.use(express.static(path.join(__dirname, 'static/dist')));

// Allow all routes to make a request for react router
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'static/dist/index.html'));
});

app.listen(process.env.PORT || 8080);