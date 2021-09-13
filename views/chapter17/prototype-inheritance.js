let object1 = {
	name : "javascript",
	age : 1990,
	getage : function() {
		console.log(`my age is ${this.name}`);
	}
}

let object2 = {
	name : "object 2",
}

object2.__proto__ = object1;				//  the object1 properties are inherited to object 2 
console.log(object2.age);
console.log(object2.getage());



// =====================================================================================================================

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