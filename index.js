var express = require('express');
var app = express();
// var path = require('path');

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));


//Chapter 3
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

app.get('/variables', (req, res)=>{
	res.render('chapter3/variables');
});

app.get('/passby-reference', (req, res)=>{
	res.render('chapter3/passby-reference');
});

app.get('/scope-quirks', (req, res)=>{
	res.render('chapter3/scope-quirks');
});

app.get('/import', (req, res)=>{
	res.render('chapter3/import');
});


//Chapter 4
app.get('/evaluate-statements', (req, res)=>{
	res.render('chapter4/evaluate-statements');
});


//Chapter 5
app.get('/primitive-values', (req, res)=>{
	res.render('chapter5/primitive-values');
});

app.get('/boolean', (req, res)=>{
	res.render('chapter5/boolean');
});

app.get('/bigint', (req, res)=>{
	res.render('chapter5/bigint');
});

app.get('/template-string', (req, res)=>{
	res.render('chapter5/template-string');
});


//Chapter 6
app.get('/type-coercion', (req, res)=>{
	res.render('chapter6/type-coercion');
});
app.get('/null-undefined', (req, res)=>{
	res.render('chapter6/null-undefined');
});

//Chapter 7
app.get('/const', (req, res)=>{
	res.render('chapter6/const');
});
app.get('/variable-type', (req, res)=>{
	res.render('chapter6/variable-type');
});


//Chapter 8
app.get('/delete', (req, res)=>{
	res.render('chapter6/delete');
});
app.get('/in', (req, res)=>{
	res.render('chapter6/in');
});
app.get('/ternary', (req, res)=>{
	res.render('chapter6/ternary');
});


//start Server port
var server = app.listen(4000, function(){
    console.log('listening to port 4000')
});