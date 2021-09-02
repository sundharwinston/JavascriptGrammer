// function with name of language. name & year is the parameter
function langugage(name,year) {										
	console.log("Hi I am " + name +" my invention is " + year);
}
langugage("javascript",1995);					// function invoke



// Arrow function
let arrowFunction = (name,type) => {
	console.log("Hi I am " + name  + " "+type);
}
arrowFunction("Arrow function","ES6"); 			// function invoke