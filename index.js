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
	res.render('chapter7/const');
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


// Chapter 16

app.get('/dynamic-html', (req, res)=>{
	res.render('chapter16/dynamic-html');
});

//Chater 20
app.get('/promise', (req, res)=>{
	res.render('chapter20/promise');
});




//Evaluation 1
app.get('/primenumber', (req, res)=>{
	res.render('Evaluation1/prime-number');
});
app.get('/doublequal-tribleequal', (req, res)=>{
	res.render('Evaluation1/doublequal-tribleequal');
});
app.get('/reverse-string', (req, res)=>{
	res.render('Evaluation1/reverse-string');
});
app.get('/reverse-word', (req, res)=>{
	res.render('Evaluation1/reverse-word');
});
app.get('/palindrome', (req, res)=>{
	res.render('Evaluation1/palindrome');
});
app.get('/foreach-map', (req, res)=>{
	res.render('Evaluation1/foreach-map');
});
app.get('/random-number', (req, res)=>{
	res.render('Evaluation1/random-number');
});
app.get('/remove-dublicates-in-array', (req, res)=>{
	res.render('Evaluation1/remove-dublicates-in-array');
});
app.get('/sumof-natural-numbers', (req, res)=>{
	res.render('Evaluation1/sumof-natural-numbers');
});
app.get('/arrayflat', (req, res)=>{
	res.render('Evaluation1/arrayflat');
});
app.get('/generator', (req, res)=>{
	res.render('Evaluation1/generator');
});
app.get('/rightangle-triangle', (req, res)=>{
	res.render('Evaluation1/rightangle-triangle');
});
app.get('/pyramid', (req, res)=>{
	res.render('Evaluation1/pyramid');
});
app.get('/diamond-pattern', (req, res)=>{
	res.render('Evaluation1/diamond-pattern');
});
app.get('/groupby', (req, res)=>{
	res.render('Evaluation1/groupby');
});
app.get('/removeduplicate-arrayofobject', (req, res)=>{
	res.render('Evaluation1/removeduplicate-arrayofobject');
});
app.get('/merge-array', (req, res)=>{
	res.render('Evaluation1/merge-array');
});
app.get('/consoleApi', (req, res)=>{
	res.render('Evaluation1/consoleApi');
});

// app.get('/sumof-even-numbers', (req, res)=>{
// 	res.render('Evaluation1/sumof-evennumbers');
// });
app.get('/oject-compare', (req, res)=>{
	res.render('Evaluation1/oject-compare');
});






//start Server port
var server = app.listen(4000, function(){
    console.log('listening to port 4000')
});