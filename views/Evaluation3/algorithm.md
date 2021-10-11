## 1. What is the scope of "this" inside the Arrow function? Explain with an example?

solution :

The Arrow function doesn't define it's own execution context. The arrow function refers the value in `lexical` manner.
	
	var name = "Javascript";
	var object = {
		arrow : () => {
	 		// this.name = "check",
			console.log(this.name);
		},
	}
	console.log(object.arrow());

## 2. How would you create all permutations of a string?


Algorithm : 

step 1: start the program.

step 2: 

Source Code : 👉 

	FUNCTION permutation(string) 
	  IF (!string || typeof string !== "string")
	    return "Please enter a string";
	  ELSE IF (string.length < 2 )
	    return string;
	  INITIALIZE permutations = []; 
	  FOR (var i = 0; i < string.length; i++) 
	    INITIALIZE char = string[i];
	    if (string.indexOf(char) != i) 
	      continue; 
	    INITIALIZE remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 
	    FOR (var subPermutation of permutation(remainingString))
	      permutations.push(char + subPermutation)
	  return permutations;
	END FUNCTION
	PRINT (permutation("abc")) 


## 3.What is the difference between when classic and arrow functions are used as event callbacks?

Both the functions are differ based on `this` keyword working nature. let's see the examples.

- The function hoisting is only applicable in calassic function not in arrow function.
- If the arrow function hoisted then shows the error like "Cannot access 'ArrowFunctioncheck' before initialization".

Source Code : 👉 

`classic function :`

	function check() {
		console.log("classic function");
		console.log(this);
	}
	document.addEventListener('onChange',check());


`Arrow function :`

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
create a instance class and object using `new` keyword.

`static Method:`
The static members/variables are not accepted in instance method.

Source Code : 👉 

## 6. How does "this" works inside the Class method with an example?

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

step 1: The function ex execute first.

step 2: the function ex2 execute second.

step 3: The functon ex1 execute third because of the setTimeout functon. Here the setTimeout method allows to execute the function after 1 seconds

## 8.Event Loop 

JavaScript has a concurrency model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

## 9. Create a custom event listener and explain?

Algorithm : 

step 1: create a event constructor using new keyword.

step 2: write the listening code using Event Listener and call the function.

step 3: 

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

- javascript does not allow the constructor in a same problem (derived class or extented class) that's where the `super` keyword comes into picture.
- The super keyword is used to access and call functions on an object's parent.
- Super keyword used to call the parent constructor.

`Constructor :`

- 




