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

