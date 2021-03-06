let array = [1,2,3,4,5];
let object = {
	name : "javascript",
	age : 1990,
	getage : function() {
		console.log(`my age is ${this.age}`);
	}
}
function check() {
	// body...
}

let arrayProperty = array.__proto__;
let arraycheck = Array.prototype;
console.log(arrayProperty);


let objectProperty = object.__proto__;
let objectCheck = object.prototype;
console.log(objectCheck);

// ==========================================================================================================

// Constructor function
function language(name) {
	this.name = name;
	// this.getName = function() {								// in every object call it gives copy of function.
	// 	return this.name;
	// }
}

language.prototype.getName = function () {						// this function loaded only once in a program.
	return this.name;
}

var language1 = new language("java");

// language1.getName = function() {								// It's only applicable for single object
// 	return this.name;
// }
var language2 = new language("javascript");
console.log("The language Name is " + language1.getName());
console.log("The language Name is " + language2.getName());