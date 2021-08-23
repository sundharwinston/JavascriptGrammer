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


//Chapter 9
app.get('/rest', (req, res)=>{
	res.render('chapter9/rest');
});
app.get('/spread', (req, res)=>{
	res.render('chapter9/spread');
});
app.get('/destructing-assignment', (req, res)=>{
	res.render('chapter9/destructing-assignment');
});


//Chapter 10
app.get('/closure', (req, res)=>{
	res.render('chapter10/closure');
});
app.get('/currying', (req, res)=>{
	res.render('chapter10/currying');
});



//Chapter 11
app.get('/for', (req, res)=>{
	res.render('chapter11/for');
});
app.get('/for-of', (req, res)=>{
	res.render('chapter11/for-of');
});
app.get('/for-in', (req, res)=>{
	res.render('chapter11/for-in');
});



//Chapter 12
app.get('/sort', (req, res)=>{
	res.render('chapter12/sort');
});
app.get('/foreach', (req, res)=>{
	res.render('chapter12/foreach');
});
app.get('/every', (req, res)=>{
	res.render('chapter12/every');
});
app.get('/some', (req, res)=>{
	res.render('chapter12/some');
});
app.get('/filter', (req, res)=>{
	res.render('chapter12/filter');
});
app.get('/map', (req, res)=>{
	res.render('chapter12/map');
});
app.get('/flat', (req, res)=>{
	res.render('chapter12/flat');
});
app.get('/compare-object', (req, res)=>{
	res.render('chapter12/compare-object');
});
app.get('/compare-array', (req, res)=>{
	res.render('chapter12/compare-array');
});


//start Server port
var server = app.listen(4000, function(){
    console.log('listening to port 4000')
});