var express = require('express');
var app = express();
// var path = require('path');

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));


app.get('/dom', (req, res)=>{
	res.render('chapter3/DOMContentLoaded');
});

app.get('/readystate', (req, res)=>{
	res.render('chapter3/readystate');
});

app.get('/window-onload', (req, res)=>{
	res.render('chapter3/window-onload');
});

app.get('/strictmode', (req, res)=>{
	res.render('chapter3/strictmode');
});
 
var server = app.listen(4000, function(){
    console.log('listening to port 4000')
});