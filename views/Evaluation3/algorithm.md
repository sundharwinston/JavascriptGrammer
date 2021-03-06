## 1. What is the scope of "this" inside the Arrow function? Explain with an example?

solution :

- In the strict mode, JavaScript sets the this to undefined.
- The Arrow function doesn't define it's own execution context. The arrow function refers the value in `lexical` manner.
"this" keyword doesn't work in nested function in object. Example

`"this" in object :`

	var john = {
	    name: 'John',
	    greet: function(people) {
	      const that = this;
	        people.forEach(function (person) {
	            console.log('Hi ' + person + '. My name is ' + that.name);
	        });
	    }
	}
	john.greet(['javascript', 'react', 'Angular']); 

`"this" in Arrow Function :`

	var name = "Javascript";
	var object = {
		arrow : () => {
	 		// this.name = "check",
			console.log(this.name);
		},
	}
	console.log(object.arrow());

`IIFE (Immediately Invoked Function Expression) :`

The first is the anonymous function with lexical scope enclosed within the `Grouping Operator ()`. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

	( function(){
	  name = "sundhar";
	  console.log(name);
	}() )


## 2. How would you create all permutations of a string?

Algorithm : 

step 1: use strict mode in global manner and define function declaration with the name of permutation.

step 2: check if the given string is string or not if ture then return a error message. if false go to next step.

step 3: check if the string length is less than 2 if true return a string else go to next step.

step 4: declare a empty array with name of permutations.

step 5: initialize a for loop with the condition of i < string length and i is incremented by 1.

step 5.1: inside a for loop initialize a variable char and assisn string[i].

step 5.2: initialize a variable remainingString and assign slicing output i.e string.slice(0, i) + string.slice(i + 1, string.length).

step 5.3: define for of with variable subPermutation and callback function of permutation(remainingString as argument).

step 5.3.1: push the concatenated value of char and subPermutation into permutations array.

step 6: finally print the array.

step 14: stop the program.

Source Code : ???? 
	
	"use strict"
	 FUNCTION permutation(string) {
	  	IF (!string || typeof string !== "string"){
	    	RETURN "Please enter a string";
	  	} ELSE IF (string.length < 2 ){
	    	RETURN string;
	  	}
	  	INITIALIZE permutations = []; 
	  	for (i = 0; i < string.length; i++) {
	    	INITIALIZE char = string[i];
	    	INITIALIZE remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 
	    	FOR (subPermutation of permutation(remainingString))
	      		permutations.push(char + subPermutation)
	  		}
	  	RETURN permutations;
	}
	PRINT(permutation("abc"));				// Function invoked


## 3.What is the difference between when classic and arrow functions are used as event callbacks?

Both the functions are differ based on `this` keyword working nature. let's see the examples.

Source Code : ???? 

`classic function :`

- The classic function refers to the target elemeents.

		function check() {
			console.log("classic function");
			console.log(this);
		}
		document.addEventListener('onChange',check());


`Arrow function :`

- The function hoisting is only applicable in calassic function not in arrow function.
- If the arrow function hoisted then shows the error like "Cannot access 'ArrowFunctioncheck' before initialization".
- It refers window property.

		let ArrowFunctioncheck = () => {
			console.log("Arrow function");
			console.log(this);
		}
		document.addEventListener('onChange',ArrowFunctioncheck());

## 4. Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?

	for(var i = 0; i < 10; i++) {
		setTimeout(function() {
			console.log(i);
		}, 10);
	}

Solution :

- Here, the event loop comes into picture. let's see how its work. first of all, whenever the for loop execution the setTimeout also executed but not give the output it goes to `Event Loop queue`. when the time reached to execution then only the event loop helps to migrate queue data into `call stack`. 
- Only the thing is after finish for loop the setTimeout will start executing.

## 5. Explain the Class instance method and static method with an example?

`Class instance :`

- create a instance class and object using `new` keyword.
- call the function using object.

		class instanceClass {
			name = "sundhar";
			getDetail = function() {
				console.log(`classic function`);
			}
		}
		let object = new instanceClass();
		console.log(object.getDetail());


`static Method:`

- If you want to use the object instance inside the static method, you can send it as a parameter.
- you can call the static function only by class name not to call directly by function name or this.function name.
- The static members/variables are not accepted in instance method.
- we can call a static method in directly not by object.

		class staticClass {
			name = "sundhar";
			static getDetail = function() {
				console.log(`static function`);
			}
		}
		console.log(staticClass.getDetail());

`Pass object parameter in static method :`

	class instanceClass {
	  	constructor(x) {
	    	this.name =x; 
	    	console.log(x);
	  	}
		name = "sundhar";
		static getDetail = function(y) {
			console.log(`classic function ${y.name}`);
		}
	}
	let object = new instanceClass("hey");
	console.log(instanceClass.getDetail(object));


Source Code : ???? 

## 6. How does "this" works inside the Class method with an example?

- this working in class is similiar to function.

		class Rectangle {
			constructor(height, width) {
			    this.height = height;
			    this.width = width;
			}
			calcArea = function(){
				// this.height = 20;
				return this.height * this.width;
			}
		}
		const square = new Rectangle(10, 10);
		console.log(square.calcArea()); // 100

## 7. What is the execution order of the following block of code?

	const ex1 = () => console.log(ex1);
	const ex2 = () => console.log(ex2);
	const ex = () => {
		console.log(ex);
		setTimeout(ex1, 1000);
		ex2();
	}
	ex();

`Solution :`

step 1: The function `ex` execute first.

step 2: the function `ex2` execute second.

step 3: The functon `ex1 execute third` because of the setTimeout functon. Here the setTimeout method allows to execute the function after 1 seconds

## 8.Event Loop 

JavaScript has a concurrency model based on an event loop, which is `responsible for executing the code, collecting and processing events, and executing queued sub-tasks.` This model is quite different from models in other languages like C and Java.

## 9. Create a custom event listener and explain?

Algorithm : 

step 1: start the program.

step 2: create a event constructor using new keyword.

step 3: write the listening code using Event Listener and call the function respective to the eventListener syntax.

step 4: write function definition.

step 5: check condition and dispatch your event.

step 6: stop the program.

	let x = 5;
	const startEvent = new Event("start");
	document.addEventListener('start', functionCheck);
	function functionCheck() {
		console.log("listening event");
	}
	if(x == 5){
	  document.dispatchEvent(startEvent);
	}

## 10. Explain the "super" and "constructor" keywords inside the Class with an example?

`Super :`

- javascript does not allow the multiple constructor in a same class (derived class or extented class) that's where the `super` keyword comes into picture.
- The super keyword is used to access and call functions on an object's parent.
- Super keyword used to call the parent constructor.

		class name {
			constructor(fname,lname) {
				this.name = "sundhar";
				this.last = "winston";
				console.log(`super constructor ${fname} ${lname}`);
			}
			getDetail(){
				console.log(`super function`);
			}
		}
		class detail extends name {
			constructor(fname,lname){
				super(fname,lname);
				console.log(this.name);
			}
			result = function() {
				return this.getDetail();
			}
		}
		let obj = new detail("hey","you");
		console.log(obj.result());

`Constructor :`

- In every class the javascript will generate empty constructor. For example

		class name {
			constructor(fname,lname) {
			    this.fname = fname;
			    this.last = lname;
			    console.log("super constructor "+this.fname + this.last);
			}
		    getDetail(){
		    	console.log("super function");
			}
		}
    	let obj = new name("sundhar","winston");
    




